import { createClient, groq } from "next-sanity";
import { book } from "../types/project";

export async function getProjects(): Promise <book[]>{
    const client = createClient({
        projectId: 'oet0l5ch',
        dataset: 'production',
        apiVersion: "2024-05-29",
    });

    return client.fetch(
        groq`*[_type=="book"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    );
}
