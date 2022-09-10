/* eslint-disable no-unused-vars */
import Link from 'next/link'
import react from 'react'

const Navitem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <a
        className={`
        nav__link ${active ? 'active' : ''}
        `}
      >
        {text}
      </a>
      </Link>
  )
}

export default Navitem
