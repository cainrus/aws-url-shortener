import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const re = /^\/\w{5}$/;

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    if (re.test(pathname)) {
        const short = pathname.slice(1);
        const redirectUrl = new URL(`/api/redirect?target=${short}`, request.url);
        return NextResponse.rewrite(redirectUrl);
    }
    return NextResponse.next();
}
