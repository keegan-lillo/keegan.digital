import clsx from 'clsx'
import { GatsbyLinkProps, Link } from 'gatsby'
import React from 'react'

import s from './Nav.module.scss'

export function NavLink(props: Omit<GatsbyLinkProps<{}>, 'ref'>) {
  return (
    <Link
      className={s.navItem}
      activeClassName={s.navActive}
      partiallyActive
      {...props}
    />
  )
}

type NavProps = {
  className?: string
}

export default function Nav({ className }: NavProps) {
  return (
    <nav className={clsx(s.nav, className)}>
      <NavLink to="/about/">About</NavLink>
      <NavLink to="/portfolio/">Portfolio</NavLink>
      <NavLink to="/giving-back/">Giving Back</NavLink>
    </nav>
  )
}
