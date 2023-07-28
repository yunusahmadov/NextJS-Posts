import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'


type Post ={
  userId:number,
  id:number,
  title:string,
  body:string,
}


export const metadata:Metadata={
  title: "Blog | Next App"
}

async function getData(){
  const response=await fetch('https://jsonplaceholder.typicode.com/posts',{
    next:{
      revalidate:60
    }
  })

  if(!response.ok) throw new Error('Unable to fetch posts!')

  return response.json()
}

export default async function  Blogpage() {
  const posts = await getData()
  console.log(posts);
  
  
  return (
    <div  >
    <h1 className='text-[60px] text-center'>
    Blogs
    </h1>
    <div className='bg-slate-200 w-full flex flex-wrap gap-5 justify-center p-5'>
    {
  posts.map((post:Post)=>{
    return <div key={post.id} className='bg-lime-500 w-[200px] h-[200px] text-xs flex flex-col justify-between'>
      <div className='flex justify-center text-center items-center h-full'>
      <h1>{post.title}</h1>
      </div>
      <Link href={`/blog/${post.id}`} className='bg-lime-700 p-1 w-24 ml-auto'>Show more</Link>
    </div>
  })
}
</div>

</div>
  )
}



