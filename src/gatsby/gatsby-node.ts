import { resolve } from 'path'

import { GatsbyNode } from 'gatsby'
import { createFilePath } from 'gatsby-source-filesystem'

import {
  AllMarkdownQuery,
  MarkdownRemarkFrontmatter,
} from '../../types/graphql'

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions

  // language=GraphQL
  const allMarkdown = await graphql<AllMarkdownQuery>(`
    query AllMarkdown {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            fields {
              slug
              template
            }
          }
        }
      }
    }
  `)

  if (allMarkdown.errors != null) {
    console.error(allMarkdown.errors)
    throw new Error(allMarkdown.errors)
  }

  allMarkdown?.data?.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, template } = node.fields ?? {}

    if (!slug) {
      throw new Error(`Missing slug for ${node.fileAbsolutePath}`)
    }

    createPage({
      // This will automatically resolve the template to a corresponding
      // `template` frontmatter in the Markdown.
      //
      // Feel free to set any `template` as you'd like in the frontmatter, as
      // long as the corresponding template file exists in src/templates.
      // If no template is set, it will fall back to the default `page`
      // template.
      component: resolve(`./src/templates/${template}.tsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug,
      },
      path: slug,
    })
  })
}

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  actions,
  getNode,
  node,
}) => {
  const { createNodeField } = actions

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const value = createFilePath({
        getNode,
        node,
        trailingSlash: false,
      })

      // Used to generate URL to view this content.
      createNodeField({ name: 'slug', node, value })

      // Used to determine a page template.
      const { template } = node.frontmatter as MarkdownRemarkFrontmatter
      createNodeField({ name: 'template', node, value: template ?? 'basic' })

      // @todo copy over all fields?
    }
  }
}
