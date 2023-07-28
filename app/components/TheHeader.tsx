import Link from 'next/link'
import React from 'react'

function TheHeader() {
  return (
    <header className='flex justify-center gap-5 bg-lime-500 w-full p-4'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/blog'>Blog</Link>
    </header>
  )
}

export default TheHeader