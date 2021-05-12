import { graphql, PageProps } from 'gatsby'
import React from 'react'

import { OrganizationTemplateQuery } from '../../types/graphql'
import OrganizationTitle from '../components/OrganizationTitle'
import { Breadcrumb, PageContext } from '../components/ui/Breadcrumb'
import { Cards } from '../components/ui/cards'
// eslint-disable-next-line import/order
import ProjectCard from '../components/ProjectCard'
import MainLayout from '../layouts/MainLayout'

import { ImageLink } from './imageLink'

import s from './organization.module.scss'

export const query = graphql`
  fragment OrganizationTemplateLogoImageSharp on File {
    childImageSharp {
      gatsbyImageData(
        height: 48
        formats: AUTO
        placeholder: NONE
        layout: CONSTRAINED
      )
    }
  }

  query OrganizationTemplate($slug: String!, $orgId: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        titleAndLogo
        quote {
          author
          content
        }
        images {
          alt
          caption
          image {
            id
            ...ImageLinkFragment
            childImageSharp {
              gatsbyImageData(
                transformOptions: { cropFocus: NORTH }
                aspectRatio: 1.7
                placeholder: BLURRED
                formats: AUTO
              )
            }
          }
        }
        logo {
          dark {
            ...OrganizationTemplateLogoImageSharp
          }
          light {
            ...OrganizationTemplateLogoImageSharp
          }
        }
      }
    }
    projects: allMarkdownRemark(
      filter: {
        fields: {
          orgId: { eq: $orgId }
          sourceInstanceName: { eq: "projects" }
        }
      }
      sort: { order: ASC, fields: frontmatter___order }
    ) {
      edges {
        ...ProjectCard
      }
    }
  }
`

export default function OrganizationTemplate({
  data,
  pageContext,
}: PageProps<OrganizationTemplateQuery, PageContext>) {
  const { frontmatter, html = '' } = data.page ?? {}
  const { images, logo, quote, title = '', titleAndLogo } = frontmatter ?? {}

  return (
    <MainLayout title={title}>
      <Breadcrumb pageContext={pageContext} />
      <OrganizationTitle
        component="h1"
        dark={logo?.dark?.childImageSharp?.gatsbyImageData}
        light={logo?.light?.childImageSharp?.gatsbyImageData}
        title={title}
        showTitle={Boolean(titleAndLogo)}
      />
      <div className={s.content} dangerouslySetInnerHTML={{ __html: html }} />
      {images?.length && (
        <section className={s.images}>
          {images.map((image) => (
            <ImageLink key={image?.image?.id} {...image} />
          ))}
        </section>
      )}
      {quote?.content && (
        <blockquote>
          <p>“{quote.content}”</p>
          <cite>— {quote.author}</cite>
        </blockquote>
      )}
      <Cards>
        {data.projects.edges.map(
          ({ node }) =>
            node.fields?.slug && (
              <ProjectCard key={node.fields?.slug} node={node} />
            ),
        )}
      </Cards>
    </MainLayout>
  )
}
