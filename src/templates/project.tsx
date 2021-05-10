import { graphql, PageProps } from 'gatsby'
import React from 'react'

import { ProjectTemplateQuery } from '../../types/graphql'
import { Breadcrumb, PageContext } from '../components/ui/Breadcrumb'
import { Card } from '../components/ui/cards'
import TechnologyList from '../components/ui/TechnologyList'
import MainLayout from '../layouts/MainLayout'

import { ImageLink } from './imageLink'

import s from './project.module.scss'

export const query = graphql`
  fragment ProjectTemplateImage on File {
    id
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: JPG)
    }
    ...ImageLinkFragment
  }

  query ProjectTemplate($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        technology
        images {
          alt
          caption
          image {
            ...ProjectTemplateImage
          }
        }
        subProjects {
          title
          description
          images {
            alt
            caption
            image {
              ...ProjectTemplateImage
            }
          }
        }
      }
    }
  }
`

export default function ProjectTemplate({
  data,
  pageContext,
}: PageProps<ProjectTemplateQuery, PageContext>) {
  const { frontmatter, html = '' } = data.page ?? {}
  const { images, subProjects, technology, title } = frontmatter ?? {}

  return (
    <MainLayout title={title}>
      <Breadcrumb pageContext={pageContext} />
      <h1>{title}</h1>
      <div className={s.content}>
        <section dangerouslySetInnerHTML={{ __html: html }} />
        {technology && (
          <>
            <h2 className={s.technologyTitle}>Technology</h2>
            <TechnologyList technology={technology} />
          </>
        )}
      </div>
      <section className={s.projectImages}>
        {images?.map((image) => (
          <ImageLink key={image?.image?.id} {...image} />
        ))}
      </section>
      <section className={s.subProjects}>
        {subProjects?.map(({ description, images, title }) => (
          <Card key={title}>
            <h3 className={s.subProjectTitle}>{title}</h3>
            <p>{description}</p>
            <div className={s.subProjectImages}>
              {images?.map((image) => (
                <ImageLink key={image?.image?.id} {...image} />
              ))}
            </div>
          </Card>
        ))}
      </section>
    </MainLayout>
  )
}
