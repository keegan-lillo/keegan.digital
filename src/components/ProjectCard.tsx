import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

import { ProjectCardFragment } from '../../types/graphql'

import { CardLink } from './ui/cards'
import TechnologyList from './ui/TechnologyList'

import s from './ProjectCard.module.scss'

type Props = {
  node: ProjectCardFragment['node']
}

export const query = graphql`
  fragment ProjectCard on MarkdownRemarkEdge {
    node {
      fields {
        slug
      }
      frontmatter {
        technology
        title
        images {
          alt
          image {
            childImageSharp {
              gatsbyImageData(
                height: 400
                formats: JPG
                placeholder: BLURRED
                width: 660
                transformOptions: { cropFocus: NORTH }
              )
            }
          }
        }
      }
    }
  }
`

export default function ProjectCard({ node }: Props) {
  const {
    fields: { slug } = {},
    frontmatter: { images, technology, title } = {},
  } = node
  const { alt = '', image } = images?.[0] ?? {}

  return (
    <CardLink to={slug ?? '/'}>
      <h3 className={s.title}>{title}</h3>
      <GatsbyImage
        className={s.image}
        alt={alt}
        image={image?.childImageSharp?.gatsbyImageData}
      />
      {technology && <TechnologyList technology={technology} />}
    </CardLink>
  )
}
