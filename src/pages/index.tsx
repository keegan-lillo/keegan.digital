import React from 'react'

import Nav from '../components/Nav'
import { ReactComponent as Logo } from '../components/svg/logo.svg'
import HomeLayout from '../layouts/HomeLayout'

import s from './index.module.scss'

export default function HomePage() {
  return (
    <HomeLayout>
      <Logo className={s.logo} />
      <Nav className={s.nav} />
    </HomeLayout>
  )
}
