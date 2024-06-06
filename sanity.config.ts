import { defineConfig } from "sanity"; 
import { deskTool } from "sanity/desk"
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: 'oet0l5ch',
    dataset: 'production',
    title: "Sanskruti kale",
    apiVersion: "2024-06-06",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas },
});

export default config;