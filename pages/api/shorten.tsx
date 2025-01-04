import { createNewURL } from '@/shared/utils/createNewUrl';

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = await createNewURL({ long: req.body.url });
    res.status(200).json(data);
}
