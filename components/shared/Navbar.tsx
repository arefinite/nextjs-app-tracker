'use client'
import { navs } from '@/lib/navs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className='mb-8'>
      <ul className='flex'>
        {navs.map((nav, i) => (
          <Link href={nav.href} key={i}>
            <li
              className={`text-white px-6 py-2 ${
                pathname === nav.href ? 'bg-primary' : 'bg-muted-foreground'
              } ${i === 0 ? 'rounded-l-md' : ''} ${
                i === navs.length - 1 ? 'rounded-r-md' : ''
              }  transition-all  delay-50 hover:opacity-90 flex items-center gap-2`}
            >
              <span>{nav.icon}</span>
              <span>{nav.label}</span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}
export default Navbar
