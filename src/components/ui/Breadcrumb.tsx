import { Breadcrumb as BreadcrumbSrc } from 'gatsby-plugin-breadcrumb'
import React from 'react'

import s from './Breadcrumb.module.scss'

type Props = JSX.IntrinsicElements['nav'] & {
  pageContext: {
    breadcrumb: {
      crumbs: { crumbLabel: string; pathname: string }[]
    }
    slugTitleMap: Record<string, string>
  }
}

export function Breadcrumb({ pageContext, ...rest }: Props) {
  const crumbs = pageContext.breadcrumb.crumbs.map(({ pathname }) => ({
    crumbLabel: pageContext.slugTitleMap[pathname] ?? '',
    pathname,
  }))

  return (
    <div className={s.root}>
      <BreadcrumbSrc {...rest} crumbs={crumbs} hiddenCrumbs={['/']} />
    </div>
  )
}
