import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import { IndexPageQuery } from '../graphqlTypes'

type Props = {
  data: IndexPageQuery
}

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`

const IndexPage: FC<Props> = ({ data }) => {
  return (
    <Layout>
      <h1>{data.site.siteMetadata.siteName}</h1>
      <p>Hello and welcome!</p>
    </Layout>
  )
}

export default IndexPage
