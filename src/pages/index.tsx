import { graphql } from 'gatsby'
import React from 'react'

import { IndexPageQuery } from '../../types/graphql'
import MainLayout from '../layouts/MainLayout'

type Props = {
  data: IndexPageQuery
}

export const pageQuery = graphql`
  query IndexPage {
    site {
      buildTime
      siteMetadata {
        siteName
      }
    }
  }
`

export default function IndexPage({ data }: Props) {
  return (
    <MainLayout>
      <h1>{data.site?.siteMetadata?.siteName}</h1>
    </MainLayout>
  )
}
