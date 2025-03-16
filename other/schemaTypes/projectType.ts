import { defineType, defineField, defineArrayMember } from "sanity";

export const ProjectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "altribute",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
  ],
});

