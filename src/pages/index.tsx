import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import { Query } from '../graphqlTypes'

type Props = {
  data: Query
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      host
      siteMetadata {
        siteName
      }
    }
  }
`

export default class IndexPage extends Component<Props> {
  render() {
    const { siteMetadata, host } = this.props.data.site!
    return (
      <Layout>
        <h1>
          {siteMetadata!.siteName} - {host}
        </h1>
        <p>Hello and welcome!</p>
      </Layout>
    )
  }
}
