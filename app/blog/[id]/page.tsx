import { Metadata } from "next"

//Получение даты по id
async function getData(id:string){
  const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    next:{
      revalidate:60
    }
  })

  return response.json()
}

type Props={
    params:{
        id:string
    }
}
//Чтобы id записывался во вкладку
export async function generateMetadata({params:{id}}:Props):Promise<Metadata>{
  const post = await getData(id);
  return{
    title:post.title
  }
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);
  return(
  <div className=" flex justify-center">
      <div className="flex flex-col text-center gap-5 w-1/2">
      <h1>{post.title}</h1>
  <p>{post.body}</p> 
      </div>
  </div>
  );
  }
