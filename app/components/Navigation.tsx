'use client'
import React from 'react'
import {usePathname} from "next/navigation"
import Link from "next/link"
type NavLink={
    label:string;
    href:string;
}

type Props={
    //Указываем то что это будем массив ссылок
    navLinks:NavLink[];
}

export const Navigation = ({navLinks}:Props) => {  

    const pathname=usePathname()
  return (
    <>
        {navLinks.map((link)=>{
            const isActive=pathname===link.href;

            return (
                <Link key={link.label} href={link.href}
                className={isActive? "active" : ''}
                >
                    {link.label}
                </Link>
            )

        })}
    </>
  )
}
