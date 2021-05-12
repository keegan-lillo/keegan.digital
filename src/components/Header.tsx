import { Link } from 'gatsby'
import React from 'react'

import Nav from './Nav'
import { ReactComponent as Logo } from './svg/logo-minimal.svg'

import s from './Header.module.scss'

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.inner}>
        <div className={s.logoContainer}>
          <Link to="/" className={s.logoLink} aria-label="Home">
            <Logo className={s.logo} />
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  )
}
