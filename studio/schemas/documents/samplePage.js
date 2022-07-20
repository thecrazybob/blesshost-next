import React from 'react'

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    {
      name: 'pageTitle',
      title: 'Page Name',
      description: 'Name of the page',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'SEO Settings',
      name: 'seo',
      type: 'seo',
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title = 'Untitled'}) {
      return {
        title,
      }
    }
  }
}
