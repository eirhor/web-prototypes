import {getLocale} from "@/utils/getLocale";

export default async function Home() {
    const locale = await getLocale();

  return (
    <div>
        <h1>Home page</h1>
        <p>Locale: {locale}</p>
    </div>
  );
}
