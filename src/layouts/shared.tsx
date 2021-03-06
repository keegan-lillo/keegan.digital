import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import { HeadQuery } from '../../types/graphql'

type Props = {
  description?: string
  title?: string
}

export function Head({ description, title = '' }: Props) {
  const data = useStaticQuery<HeadQuery>(graphql`
    query Head {
      site {
        siteMetadata {
          title
          description
          author {
            name
            url
          }
        }
      }
    }
  `)

  const { siteMetadata = {} } = data.site ?? {}

  return (
    <Helmet>
      <html lang="en" />
      {/* === Icons === */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link rel="manifest" href="/icons/site.webmanifest" />
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <meta name="theme-color" content="#e9f5ff" />
      <meta property="og:image" content="/images/social-image.png" />
      {/* === SEO === */}
      <title>
        {siteMetadata.title === title
          ? title
          : `${title ? title + ' | ' : ''}${siteMetadata.title}`}
      </title>
      <meta name="author" content={siteMetadata.author?.name} />
      <meta
        name="description"
        content={description ?? siteMetadata.description}
      />
      <meta charSet="UTF-8" />
      {/* === Device === */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  )
}
