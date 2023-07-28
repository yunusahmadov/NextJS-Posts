'use client'
import React from 'react'

export default function ErrorWrapper({error}:{error:Error}) {
  return (
    <div className='flex justify-center items-center'>
        <h1>Oops!!! {error.message}</h1>
    </div>
  )
}
