import { graphql, useStaticQuery } from 'gatsby'
import React, { ReactNode } from 'react'
import { Helmet } from 'react-helmet'

import { MainLayoutQuery } from '../../types/graphql'

import s from './MainLayout.module.scss'

type Props = {
  children: ReactNode
  description?: string
  title?: string
}

export default function MainLayout({
  children,
  title = '',
  description,
}: Props) {
  const data = useStaticQuery<MainLayoutQuery>(graphql`
    query MainLayout {
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
    <>
      <Helmet>
        {/* === Icons === */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        {/* === SEO === */}
        <title>
          {siteMetadata.title === title
            ? title
            : `${title ? title + ' | ' : ''}${siteMetadata.title}`}
        </title>
        <meta
          name="description"
          content={description ?? siteMetadata.description}
        />
        <meta charSet="UTF-8" />
        {/* === Device === */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..600&display=block"
          rel="stylesheet"
        />
      </Helmet>
      <main className={s.root}>
        <div className={s.inner}>{children}</div>
      </main>
    </>
  )
}