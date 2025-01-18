import { createClient } from "next-sanity";


const client = createClient({
  projectId: "f25v3xlr", // Sanity Dashboard se lein
  dataset: "production",         // Dataset ka naam (e.g., production)
  apiVersion: "2023-01-01",      // Sanity API version
  useCdn: true,                  // Fast response ke liye (CDN se fetch karega)
});

export async function sanityFetch({query,params = {}}: {query:string, params?:any}){
    return await client.fetch(query,params)
}
