import { format, parseISO } from "date-fns"

export default {
  name: "Project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      title: "Website URL",
      name: "websiteUrl",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "figure",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "subcategory",
      title: "Subcategory",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
}
