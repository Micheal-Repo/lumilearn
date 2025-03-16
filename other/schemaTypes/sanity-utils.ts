import {groq} from "next-sanity"
import { Project } from "@/types/project";
import {client} from "./lib/client"


export async function getProjects():Promise<Project[]>{
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}