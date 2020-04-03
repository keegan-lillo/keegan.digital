import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export default function Header({ children }: Props) {
  return <h1>{children}</h1>
}
