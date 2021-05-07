import { graphql, PageProps } from 'gatsby'
import React from 'react'

import { ProjectTemplateQuery } from '../../types/graphql'
import { Card } from '../components/ui/cards'
import MainLayout from '../layouts/MainLayout'

import { ImageLink } from './imageLink'

import s from './project.module.scss'

export const query = graphql`
  fragment ProjectTemplateImage on File {
    id
    publicURL
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, formats: JPG)
    }
  }

  query ProjectTemplate($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
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
}: PageProps<ProjectTemplateQuery>) {
  const { frontmatter, html = '' } = data.page ?? {}
  const { images, subProjects, title } = frontmatter ?? {}

  return (
    <MainLayout title={title}>
      <h1>{title}</h1>
      <div className={s.content} dangerouslySetInnerHTML={{ __html: html }} />
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
