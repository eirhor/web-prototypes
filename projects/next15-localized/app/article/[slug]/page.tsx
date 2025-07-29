import {getLocale} from "@/utils/getLocale";

export default async function Article() {
    const locale = await getLocale();

    return (
        <div>
            <h1>Article page</h1>
            <p>Locale: {locale}</p>
        </div>
    );
}
