import { graphql } from 'gatsby'
import { GatsbyImage, getSrc } from 'gatsby-plugin-image'
import React from 'react'

import { ProjectTemplateImageFragment } from '../../types/graphql'

import s from './project.module.scss'

type ImageLinkProps = {
  alt?: string
  caption?: string
  image?: ProjectTemplateImageFragment
}

export const queryFragment = graphql`
  fragment ImageLinkFragment on File {
    fullSizeImage: childImageSharp {
      gatsbyImageData(
        quality: 80
        formats: JPG
        layout: FULL_WIDTH
        breakpoints: [2560]
        placeholder: NONE
      )
    }
  }
`

export function ImageLink({ alt = '', caption, image }: ImageLinkProps) {
  if (!image) {
    return null
  }

  return (
    <figure>
      <a
        className={s.imageLink}
        href={getSrc(image.fullSizeImage?.gatsbyImageData)}
        target="_blank"
        rel="noreferrer"
      >
        <GatsbyImage
          key={image.id}
          className={s.imageLinkImage}
          alt={alt}
          image={image.childImageSharp?.gatsbyImageData}
        />
      </a>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
