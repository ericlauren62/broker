import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    const nav_links = [
        {name: "Home", href: "/"},
        {name: "About", href: "/about"},
        {name: "Business", href: "/business"},
        {name: "Resources", href: "/resources"},
        {name: "Contact", href: "/contact"},
       
      ]
  return (
    <nav className="container flex justify-between items-center">
        <div className="w-[30%]">
          <Image src="/images/ITFG-LOGO.png" alt="logo"  height={150} width={200}/>
        </div>
        <ul className="flex gap-x-6 justify-between items-center mt-4 w-[35%]">
          {nav_links.map(link => {
            return <li key={link.name} className="text-xl font-trumpGothic uppercase tracking-wider"><Link href={link.href}>{link.name}</Link></li>
          })}
        </ul>
        <div className="w-[30%] flex items-center gap-x-8 mt-4 justify-end">
          <Link href="/signin" className=" h-10 px-4 flex items-center justify-center bg-gray-200 rounded-[40px] font-trumpGothic uppercase tracking-widest font-bold">Sign In</Link>
          <Link href="/signup" className="bg-primary h-10 px-5 flex items-center justify-center text-white rounded-[40px] font-trumpGothic uppercase tracking-widest font-bold">Sign Up</Link>
        </div>
      </nav>
  )
}
