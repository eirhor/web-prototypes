# README

Prototype for how to build a localized nextjs application with support
for domain binding, default locale, and additional locales, without
altering the app routing structure.

## Setup

1. Run `npm i` to install dependencies.
2. Run `npm run dev` to start the site in dev mode.
3. Open browser and go to `localhost:3000` to access the site.

## How it works

`middlewares/localeMiddleware.ts` is used to enrich the request headers with the 
header `x-locale` on incoming requests. This has a config which allows 
for whitelisting locales, and configuring default locale, domain bindings
and aliases for the locales.

Behind the scenes it rewrites the request url to remove the url segment with the
locale, meaning you don't have to adjust your folder structures
for this implementation.

An alias will map for example `no` from the request url to `nb-no` locale.

You can then use the `utils/getLocale.ts` utility to read the locale anywhere
in the app (server side only, pass it through props to client components).