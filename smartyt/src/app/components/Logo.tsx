import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href={"/"}>
      <h3 className='text-3xl font-semibold hover:text-[#FF5722] cursor-pointer duration-200'>Smart.</h3>
    </Link>
  )
}

export default Logo
