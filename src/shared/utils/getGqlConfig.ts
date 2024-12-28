export function getGqlConfig(): {
    endpoint: string,
    key: string,
} {
    const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
    if (!GRAPHQL_ENDPOINT) throw new Error("GRAPHQL_ENDPOINT is not defined");
    const GRAPHQL_KEY = process.env.GRAPHQL_KEY;
    if (!GRAPHQL_KEY) throw new Error("GRAPHQL_KEY is not defined");
    return {
        endpoint: GRAPHQL_ENDPOINT,
        key: GRAPHQL_KEY,
    }
}
