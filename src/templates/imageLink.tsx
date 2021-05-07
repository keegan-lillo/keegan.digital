import { GatsbyImage, getSrc } from 'gatsby-plugin-image'
import React from 'react'

import { ProjectTemplateImageFragment } from '../../types/graphql'

import s from './project.module.scss'

type ImageLinkProps = {
  alt?: string
  caption?: string
  image?: ProjectTemplateImageFragment
}

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
