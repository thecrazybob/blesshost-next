export default {
  title: "SEO ",
  name: "seo",
  type: "object",
  fields: [
    {
        title: "Page Title",
        name: "pageTitle",
        type: "string",
        validation: Rule => Rule.required(),
    },
    {
      title: "Meta Title",
      name: "title",
      type: "string",
      description: "Title used for search engines and browsers",
      validation: (Rule) =>
        Rule.max(50).warning(
          "Longer titles may be truncated by search engines"
        ),
    },
    {
      title: "Meta Description",
      name: "metaDesc",
      type: "text",
      rows: 3,
      description: "Description for search engines",
      validation: (Rule) =>
        Rule.max(150).warning(
          "Longer descriptions may be truncated by search engines"
        ),
    },
    {
      title: "Keywords",
      name: "keywords",
      type: "text",
      rows: 3,
      description: "Keywords for search engines. Seperate with commas",
    },
  ],
};
