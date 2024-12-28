import {getGqlConfig, isError, isObject} from "@/shared/utils";
import { customAlphabet, urlAlphabet } from "nanoid";
import type {NextApiRequest, NextApiResponse} from "next";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const config = getGqlConfig()
    const shortCode = customAlphabet(urlAlphabet, 5)();

  const query = /* GraphQL */ `
      mutation CREATE_URL($input: CreateURLInput!) {
          createURL(input: $input) {
              long
              short
          }
      }
  `;

    const variables = {
        input: {
            long: req.body.url,
            short: shortCode,
        },
    };
    const options = {
        method: "POST",
        headers: {
            "x-api-key": config.key,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, variables }),
    };
    const response: {statusCode?: number, data?: unknown} = {};
    try {
        const res = await fetch(config.endpoint, options);
        response.data = await res.json();
        response.statusCode = 200;
        if (!isObject(response.data)) throw new Error("res.json() result is invalid type");
        if (response.data.errors) response.statusCode = 400;
    } catch (error: unknown) {
        if (!isError(error)) throw error;
        response.statusCode = 400;
        response.data = {
            errors: [
                {
                    message: error.message,
                    stack: error.stack,
                },
            ],
        };
    }
    res.status(response.statusCode).json(response.data);
}
