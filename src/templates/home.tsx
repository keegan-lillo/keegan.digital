import { graphql } from 'gatsby'
import React from 'react'

import { HomeTemplateQuery } from '../../types/graphql'
import { ReactComponent as Logo } from '../components/svg/logo.svg'
import MainLayout from '../layouts/MainLayout'

import s from './home.module.scss'

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
      <h1 title={title}>
        <Logo className={s.logo} />
      </h1>
      <div className={s.content} dangerouslySetInnerHTML={{ __html: html }} />
    </MainLayout>
  )
}
