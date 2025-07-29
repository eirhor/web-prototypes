import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import {NextRequest, NextResponse} from "next/server";

type Config = {
    locales: string[]
    defaultLocale: string
    domainBindings: Record<string, string>
    aliases: Record<string, string>
}

const config: Config = {
    locales: ['nb-no', 'en-us'],
    defaultLocale: 'nb-no',
    domainBindings: {
        'localhost': 'nb-no',
    },
    aliases: {
        'no': 'nb-no',
        'en': 'en-us',
    }
}

export function localeMiddleware(req: NextRequest) {
    if (config.locales.length <= 1) {
        return getResponse(req, config.defaultLocale, undefined);
    }

    const aliasKeys = Object.keys(config.aliases ?? {});
    if (aliasKeys.length > 0) {
        for (const aliasKey of aliasKeys) {
            if (req.nextUrl.pathname.startsWith(`/${aliasKey}/`)) {
                return getResponse(req, config.aliases[aliasKey], `/${aliasKey}`);
            }
        }
    }

    for (const locale of config.locales) {
        if (req.nextUrl.pathname.startsWith(`/${locale}/`)) {
            return getResponse(req, locale, `/${locale}`);
        }
    }

    if (config.domainBindings[req.nextUrl.host]) {
        return getResponse(req, config.domainBindings[req.nextUrl.host], undefined);
    }

    return getResponse(req, config.defaultLocale, undefined);
}

function getResponse(req: NextRequest, locale: string, toRemove: string | undefined) {
    const requestHeaders = new Headers(req.headers);

    requestHeaders.set('x-locale', locale);

    if (!toRemove) {
        return NextResponse.next({
            request: {
                ...req,
                headers: requestHeaders,
            }
        });
    }

    const nextUrl = req.nextUrl.clone();

    nextUrl.pathname = nextUrl.pathname.replace(toRemove, '');

    return NextResponse.rewrite(nextUrl,{
        request: {
            ...req,
            headers: requestHeaders,
        }
    });
}