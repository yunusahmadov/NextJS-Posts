import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata={
    title: "About | Next App"
}
function Aboutpage() {
  return (
    <div  >
        <h1 className='text-[60px] text-center'>
        About page
        </h1>
    </div>
  )
}

export default Aboutpage