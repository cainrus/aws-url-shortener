export {getGqlConfig} from './getGqlConfig';

export function isObject(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null;
}

export function isError(err: unknown): err is Error {
    return err instanceof Error;
}

export function extractUrl(data: unknown): string {
    if (
        !isObject(data)
        || !isObject(data.data)
        || !isObject(data.data.listURLS)
        || !Array.isArray(data.data.listURLS.items)
        || typeof data.data.listURLS.items[0] !== 'string'
    ) throw new Error('res.json() result is invalid type');
    const url = data.data.listURLS.items[0];
    if (!isObject(url)) throw new Error('res.json() result is invalid type');
    if (!url || typeof url.long !== 'string') throw new Error('res.json() result is invalid type');
    return url;
}
