"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import './style.css'
const navlinks=[
  {name:'Login', href: '/login'},
  {name:'Register', href: '/register'}
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathName = usePathname()
  return (
   <div>
    {
      navlinks.map(link=>{
        const isActive = pathName === link.href || (pathName.startsWith(link.href) && link.href !== '/')
        return(
          <Link className={isActive ? 'font-bold mx-4 bg-red-700':'text-blue-600'} href={link.href} key={link.name}>{link.name}</Link>
        )
      })
    }
      {children}
   </div>
  )
}
