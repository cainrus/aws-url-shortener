import { NextApiRequest, NextApiResponse } from "next";
import { findLongUrl } from "@/shared/utils/findLongUrl";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { target } = req.query;

    if (!target || typeof target !== "string") {
        return res.status(400).json({ error: "Target URL is required" });
    }

    try {
        const location = await findLongUrl({ short: target });

        if (location) {
            const hasProtocol = location.startsWith('http://') || location.startsWith('https://');
            res.writeHead(302, { Location: hasProtocol ? location : `https://${location}` });
            res.end();
            return;
        }
    } catch (err) {
        console.error("Error in findLongUrl:", err);
    }

    res.status(404).end();
}
