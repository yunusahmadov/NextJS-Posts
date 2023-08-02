"use client"
import { Metadata } from 'next'
import React, { useEffect, useState } from 'react'
import { Posts} from '../components/Posts'
import { PostSearch } from '../components/PostSearch'
import { getAllPosts } from '../services/getPosts'


export const metadata:Metadata={
  title: "Blog | Next App"
}

export default  function  Blogpage() {
  const [posts,setPosts]=useState<any[]>([])
  const [loading,setLoading]=useState(true)


  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);
  
  return (
    <div  >
    <h1 className='text-[60px] text-center'>
    Blogss
    </h1>
    <PostSearch onSearch={setPosts}/>
      {
        loading?
        <h4>Loading</h4>:
        <Posts posts={posts}/>
      }

</div>
  )
}



