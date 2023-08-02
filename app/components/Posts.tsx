import Link from 'next/link'
import React from 'react'

type Props={
    posts:any[]
}

type Post ={
    userId:number,
    id:number,
    title:string,
    body:string,
  }

export const Posts = ({ posts }: Props) => {
  return (
    <div className='bg-slate-200 w-full flex flex-wrap gap-5 justify-center p-5'>
      {posts.map((post: Post) => (
        <div key={post.id} className='bg-lime-500 w-[200px] h-[200px] text-xs flex flex-col justify-between'>
          <div className='flex justify-center text-center items-center h-full'>
            <h1>{post.title}</h1>
          </div>
          <Link href={`/blog/${post.id}`} className='bg-lime-700 p-1 w-24 ml-auto'>
            Show more
          </Link>
        </div>
      ))}
    </div>
  );
};