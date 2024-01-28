import { SwapiFilm } from "@/types/SwapiFilm";

export default async function Page({ params }: { params: { id: string } }) {
  const data = (await fetch(`https://swapi.dev/api/films/${params.id}`).then(
    (r) => r.json(),
  )) as SwapiFilm;

  return <div>{data.title}</div>;
}
