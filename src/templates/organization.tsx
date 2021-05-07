import { graphql, PageProps } from 'gatsby'
import React from 'react'

import { OrganizationTemplateQuery } from '../../types/graphql'
import OrganizationTitle from '../components/OrganizationTitle'
import ProjectCard from '../components/ProjectCard'
import { Cards } from '../components/ui/cards'
import MainLayout from '../layouts/MainLayout'

import { ImageLink } from './imageLink'

import s from './organization.module.scss'

export const query = graphql`
  fragment OrganizationTemplateLogoImageSharp on File {
    childImageSharp {
      gatsbyImageData(
        height: 64
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
            publicURL
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
    ) {
      edges {
        ...ProjectCard
      }
    }
  }
`

export default function OrganizationTemplate({
  data,
}: PageProps<OrganizationTemplateQuery>) {
  const { frontmatter, html = '' } = data.page ?? {}
  const { images, logo, quote, title = '', titleAndLogo } = frontmatter ?? {}

  return (
    <MainLayout title={title}>
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
