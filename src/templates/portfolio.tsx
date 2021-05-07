import { graphql, PageProps } from 'gatsby'
import React from 'react'

import { PortfolioPageQuery } from '../../types/graphql'
import OrganizationCard from '../components/OrganizationCard'
import { Cards } from '../components/ui/cards'
import MainLayout from '../layouts/MainLayout'

import s from './portfolio.module.scss'

export const query = graphql`
  query PortfolioPage($slug: String!, $childrenGlob: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }

    organizations: allMarkdownRemark(
      filter: { fields: { slug: { glob: $childrenGlob } } }
      sort: { order: ASC, fields: frontmatter___order }
    ) {
      edges {
        ...OrganizationCard
      }
    }
  }
`

export default function PortfolioPage({ data }: PageProps<PortfolioPageQuery>) {
  const { frontmatter, html = '' } = data.page ?? {}
  const { title } = frontmatter ?? {}

  return (
    <MainLayout>
      <h1>{title}</h1>
      <div className={s.content} dangerouslySetInnerHTML={{ __html: html }} />
      <Cards>
        {data.organizations.edges.map(
          ({ node }) =>
            node.fields?.slug && (
              <OrganizationCard key={node.fields?.slug} node={node} />
            ),
        )}
      </Cards>
    </MainLayout>
  )
}
