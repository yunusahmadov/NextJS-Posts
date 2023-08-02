import Link from 'next/link'
import React from 'react'
import { Navigation } from './Navigation'

const navItems = [
  { label: "Home", href:"/" },
  { label: "Blog", href:"/blog" },
  { label: "About", href:"/about"}
  ];

function TheHeader() {
  return (
    <header className='flex justify-center gap-5 bg-lime-500 w-full p-4'>
        <Navigation navLinks={navItems}/>
    </header>
  )
}

export default TheHeader