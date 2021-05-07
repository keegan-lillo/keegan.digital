import React, { ReactNode } from 'react'

import { Head } from './shared'

import s from './HomeLayout.module.scss'

type Props = {
  children: ReactNode
  description?: string
  title?: string
}

export default function HomeLayout({
  children,
  description,
  title = '',
}: Props) {
  return (
    <>
      <Head title={title} description={description} />
      <HomeLayoutContent>{children}</HomeLayoutContent>
    </>
  )
}

type MainLayoutContentProps = {
  children: ReactNode
}

export function HomeLayoutContent({ children }: MainLayoutContentProps) {
  return (
    <>
      <main className={s.root}>
        <div className={s.inner}>{children}</div>
      </main>
    </>
  )
}
