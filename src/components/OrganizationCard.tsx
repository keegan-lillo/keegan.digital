import { graphql } from 'gatsby'
import React from 'react'

import { OrganizationCardFragment } from '../../types/graphql'

import OrganizationTitle from './OrganizationTitle'
import { CardLink } from './ui/cards'

type Props = {
  node: OrganizationCardFragment['node']
}

export const query = graphql`
  fragment OrganizationCardImageSharp on File {
    childImageSharp {
      gatsbyImageData(
        height: 32
        formats: AUTO
        placeholder: NONE
        layout: CONSTRAINED
      )
    }
  }

  fragment OrganizationCard on MarkdownRemarkEdge {
    node {
      frontmatter {
        title
        titleAndLogo
        logo {
          dark {
            ...OrganizationCardImageSharp
          }
          light {
            ...OrganizationCardImageSharp
          }
        }
      }
      fields {
        slug
      }
      excerpt(pruneLength: 199)
    }
  }
`

export default function OrganizationCard({ node }: Props) {
  const {
    fields: { slug } = {},
    frontmatter: { logo, title = '', titleAndLogo } = {},
    excerpt,
  } = node

  return (
    <CardLink to={`/${slug}`}>
      <OrganizationTitle
        dark={logo?.dark?.childImageSharp?.gatsbyImageData}
        light={logo?.light?.childImageSharp?.gatsbyImageData}
        showTitle={titleAndLogo}
        title={title}
      />
      <p>{excerpt}</p>
    </CardLink>
  )
}
