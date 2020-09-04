import { graphql } from 'gatsby'
import React, { ReactNode } from 'react'

import { BasicTemplateQuery } from '../../types/graphql'
import MainLayout, { MainLayoutContent } from '../layouts/MainLayout'

type Props = {
  data: BasicTemplateQuery
}

export const query = graphql`
  query BasicTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default function BasicTemplate({ data }: Props) {
  const { frontmatter, html = '' } = data.markdownRemark ?? {}
  const { title } = frontmatter ?? {}

  return (
    <MainLayout title={title}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </MainLayout>
  )
}

type BasicTemplateContentProps = {
  children: ReactNode
  title: string
}

export function BasicTemplateContent({
  children,
  title,
}: BasicTemplateContentProps) {
  return (
    <MainLayoutContent>
      <h1>{title}</h1>
      {children}
    </MainLayoutContent>
  )
}
