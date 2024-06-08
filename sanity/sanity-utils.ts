import { createClient, groq } from "next-sanity";
import { book } from "../types/project";

export async function getProjects(): Promise <book[]>{
    const client = createClient({
        projectId: 'oet0l5ch',
        dataset: 'production',
        apiVersion: "2024-06-08",
        useCdn: false
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

export async function getProject(slug: string): Promise <book>{
    const client = createClient({
        projectId: 'oet0l5ch',
        dataset: 'production',
        apiVersion: "2024-06-08",
        useCdn: false
    });

    return client.fetch(
        groq`*[_type=="book" && slug.current== $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
        {slug}
    );
}
