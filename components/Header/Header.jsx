import React from 'react'
import head from './header.module.scss'
import Link from 'next/link'

export default function Header() {
  return (
    <div className={head.header}>
      Header
      <Link href='/'>Bosh sahifa</Link>
    </div>
  )
}
