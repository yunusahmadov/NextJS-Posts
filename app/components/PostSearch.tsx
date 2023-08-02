'use client'

import React, { FormEventHandler, useState } from 'react'
import { getPostsBySearch } from '../services/getPosts';

type Props={
    onSearch:(value:any[])=>void;
}


export const PostSearch = ({onSearch}:Props) => {

    const [search,setSearch]=useState('')
    const handleSubmit:FormEventHandler<HTMLFormElement>=async(event)=>{
        event.preventDefault()

        const posts= await getPostsBySearch(search)

        onSearch(posts)
    }
  return (
   <form onSubmit={handleSubmit}>
    <input type="search" placeholder='search...' value={search} onChange={event=>setSearch(event.target.value)} />
    <button type="submit">Search</button>
   </form>
  )
}
