import Link from "next/link"

export default function AboutLayout({
    children,
}:{
    children:React.ReactNode
}){
    return (
      <div className="w-full flex flex-col bg-slate-900">
        <div className="flex flex-col bg-lime-400 gap-5 items-center">
          <h1>About US</h1>
          <ul className="flex bg-lime-400 gap-5 ">
            <li>
              <Link href="/about/contacts">Contacts</Link>
            </li>
            <li>
              <Link href="/about/team">Team</Link>
            </li>
          </ul>
        </div>
       <div className="flex justify-center p-3">
       {children}
       </div>
      </div>
    );
}