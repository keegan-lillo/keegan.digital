import clsx from 'clsx'
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

import s from './OrganizationTitle.module.scss'

type Props = {
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  dark: IGatsbyImageData
  light: IGatsbyImageData
  showTitle?: boolean
  title: string
}

export default function OrganizationTitle({
  component: Cmp = 'h2',
  dark,
  light,
  showTitle,
  title,
}: Props) {
  const imageProps = {
    'alt': '',
    'aria-hidden': true,
    'imgClassName': s.image,
    'loading': 'eager',
    'objectFit': 'contain',
  } as const

  return (
    <Cmp className={clsx(s.root, showTitle && s.showTitle)}>
      <div className={s.lightImage}>
        <GatsbyImage {...imageProps} image={light} />
      </div>
      <div className={s.darkImage}>
        <GatsbyImage {...imageProps} image={dark} />
      </div>
      <span className={clsx(s.titleText, !showTitle && '_visuallyHidden')}>
        {title}
      </span>
    </Cmp>
  )
}
