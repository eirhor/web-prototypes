import {SwapiFilm} from "@/types/SwapiFilm";
import Link from "next/link";

export function Film({ created, title, url, opening_crawl, producer }: SwapiFilm) {
    const id = url.split('/').findLast(x => x);

    return (
        <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={created} className="text-gray-500">
                  {created}
                </time>
                <Link
                  href={'/films'}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Films
                </Link>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={`/film/${id}`}>
                    <span className="absolute inset-0" />
                    {title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{opening_crawl}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {producer}
                  </p>
                  <p className="text-gray-600">Producer</p>
                </div>
              </div>
            </article>
    )
}