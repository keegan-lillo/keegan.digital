import React, { ReactNode } from 'react'

import Header from '../components/Header'

import { Head } from './shared'

import s from './MainLayout.module.scss'

type Props = {
  children: ReactNode
  description?: string
  title?: string
}

export default function MainLayout({
  children,
  description,
  title = '',
}: Props) {
  return (
    <>
      <Head title={title} description={description} />
      <MainLayoutContent>{children}</MainLayoutContent>
    </>
  )
}

type MainLayoutContentProps = {
  children: ReactNode
}

export function MainLayoutContent({ children }: MainLayoutContentProps) {
  return (
    <>
      <Header />
      <main>
        <div className={s.inner}>{children}</div>
      </main>
    </>
  )
}
