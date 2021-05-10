import { resolve, basename, posix } from 'path'

import { GatsbyNode, CreateNodeArgs } from 'gatsby'
import { createFilePath } from 'gatsby-source-filesystem'

import { AllMarkdownQuery, MarkdownRemark, File } from '../../types/graphql'

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
              childrenGlob
              orgId
              slug
              sourceInstanceName
              template
              title
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

  if (!allMarkdown?.data) {
    console.error('no data!')
    throw new Error('no data!')
  }

  const slugTitleMap = Object.fromEntries(
    allMarkdown.data.allMarkdownRemark.edges.map(({ node }) => [
      node.fields?.slug,
      node.fields?.title,
    ]),
  )

  allMarkdown?.data?.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, template } = node.fields ?? {}

    if (!slug) {
      throw new Error(`Missing slug for ${node.fileAbsolutePath}`)
    }

    createPage({
      // This will automatically resolve the template to a corresponding
      // `template` frontmatter in the Markdown.
      component: resolve(`./src/templates/${template}.tsx`), // Data passed to context is
      // available in page queries as
      // GraphQL variables.
      context: { ...node.fields, slugTitleMap },
      path: slug,
    })
  })
}

export const onCreateNode = ({
  actions,
  getNode,
  node,
}: CreateNodeArgs<MarkdownRemark>) => {
  const { createNodeField } = actions

  const createFields = (obj: object) => {
    for (const [name, value] of Object.entries(obj)) {
      createNodeField({ name, node, value })
    }
  }

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const path = createFilePath({
        getNode,
        node,
        trailingSlash: true,
      })
      const { sourceInstanceName } = (getNode(node.parent) as unknown) as File

      // Used to determine a page template.
      const { organization = '', section = '' } = node.frontmatter ?? {}

      let slug = path
      let template = node.frontmatter?.template ?? 'basic'
      let orgId = ''

      switch (sourceInstanceName) {
        case 'pages': {
          createFields({ childrenGlob: posix.join('/', path, '/*') })
          break
        }
        case 'organizations': {
          orgId = basename(path)
          slug = posix.join(section, path)
          template = 'organization'
          break
        }
        case 'projects': {
          orgId = basename(organization)
          slug = posix.join('portfolio', orgId, path)
          template = 'project'
          break
        }
      }

      createFields({
        orgId,
        slug: '/' + slug.replace(/^\//, ''),
        sourceInstanceName,
        template,
        title: node.frontmatter?.title ?? '',
      })
    }
  }
}
