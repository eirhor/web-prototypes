import {headers} from "next/headers";

export async function getLocale() {
    const requestHeaders = await headers();

    return requestHeaders.get('x-locale')!;
}