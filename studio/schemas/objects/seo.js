import ComputedField from "sanity-plugin-computed-field";

export default {
  title: "SEO ",
  name: "seo",
  type: "object",
  fields: [
    {
      title: "Page Title",
      name: "pageTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
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
    {
      title: "Canonical URL",
      name: "canonical",
      type: "string",
      description: "Canonical URL for the page",
      validation: (Rule) => Rule.required(),
      inputComponent: ComputedField,
      options: {
        editable: false,
        documentQuerySelection: `
         "pageTitle": seo.pageTitle`,
        reduceQueryResult: function (queryResult) {
          return `https://blesshost.com/${queryResult.pageTitle.toLowerCase().replace(/\s+/g, '-')}`;
        },
      },
    },
    {
        title: "Opengraph Image",
        name: "opengraphImage",
        type: "document",
        validation: (Rule) => Rule.required(),
        fields: [
            {
                title: "Source URL",
                name: "sourceUrl",
                type: "string",
                description: "Opengraph URL of the image",
                validation: (Rule) => Rule.required(),
                inputComponent: ComputedField,
                options: {
                    editable: false,
                    documentQuerySelection: `
                    "pageTitle": seo.pageTitle,
                    "metaDesc": seo.metaDesc,
                    `,
                    reduceQueryResult: function (queryResult) {
                        return `https://blesshost.com/opengraph/${queryResult.pageTitle}?description=${queryResult.metaDesc}`;
                    }
                }
            }
        ]
    }
  ],
};
