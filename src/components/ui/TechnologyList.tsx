import React from 'react'

import s from '../TechnologyList.module.scss'

type Props = {
  technology: string[]
}

export default function TechnologyList({ technology }: Props) {
  return (
    <ul className={s.technologyList}>
      {technology?.map((item) => (
        <li className={s.technologyListItem} key={item}>
          {item}
        </li>
      ))}
    </ul>
  )
}
