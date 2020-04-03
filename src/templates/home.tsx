import { graphql } from 'gatsby'
import React from 'react'

import { HomeTemplateQuery } from '../../types/graphql'
import MainLayout from '../layouts/MainLayout'

type Props = {
  data: HomeTemplateQuery
}

export const query = graphql`
  query HomeTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default function HomeTemplate({ data }: Props) {
  const { html = '', frontmatter } = data.markdownRemark ?? {}
  const { title } = frontmatter ?? {}

  return (
    <MainLayout title={title}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </MainLayout>
  )
}
