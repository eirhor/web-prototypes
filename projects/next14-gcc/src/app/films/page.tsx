import { SwapiFilm } from "@/types/SwapiFilm";
import { SwapiListResponse } from "@/types/SwapiListResponse";
import { Film } from "@/app/films/components/Film";

export default async function Films() {
  const data = (await fetch("https://swapi.dev/api/films").then((r) =>
    r.json(),
  )) as SwapiListResponse<SwapiFilm>;

  return (
    <>
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Films
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Discover the different Star Wars films.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {data.results.map((film, index) => (
          <Film key={index} {...film} />
        ))}
      </div>
    </>
  );
}
