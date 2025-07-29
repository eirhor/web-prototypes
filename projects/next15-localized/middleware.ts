import {NextRequest} from "next/server";
import {localeMiddleware} from "@/middlewares/localeMiddleware";

export default function middleware(req: NextRequest) {
    return localeMiddleware(req);
}

export const config = {
    matcher: [
        '/',
        '/((?!api|_next/static|_next/image|icons|fonts|idporten|fallback.svg|manifest.json).*)',
    ],
};
