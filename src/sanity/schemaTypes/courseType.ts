import { defineType, defineField, defineArrayMember } from "sanity";

export const courseType = defineType({
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price (USD)",
      type: "number",
      description: "Price in USD",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Course Image",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    // defineField({
    //   name: "modules",
    //   title: "Modules",
    //   type: "array",
    //   of: [defineArrayMember({ type: "reference", to: [{ type: "module" }] })],
    // }),
    // defineField({
    //   name: "instructor",
    //   title: "Instructor",
    //   type: "reference",
    //   to: [{ type: "instructor" }],
    //   validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
})
