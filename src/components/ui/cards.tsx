import clsx from 'clsx'
import { Link, GatsbyLinkProps } from 'gatsby'
import React, { ReactNode } from 'react'

import s from './cards.module.scss'

type CardsProps = {
  children: ReactNode
}

export function Cards({ children }: CardsProps) {
  return <section className={s.cards}>{children}</section>
}

type CardProps = {
  children: ReactNode
}

export function Card({ children }: CardProps) {
  return <section className={s.card}>{children}</section>
}

export function CardLink<T>({
  children,
  className,
  ...rest
}: Omit<GatsbyLinkProps<T>, 'ref'>) {
  return (
    <Link className={clsx(s.card, s.link, className)} {...rest}>
      {children}
    </Link>
  )
}
