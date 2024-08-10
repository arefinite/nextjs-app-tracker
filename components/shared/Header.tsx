import { Hexagon } from 'lucide-react'
import { Button } from '../ui/button'
import { ModeToggle } from '../theme/ModeToggle'
import Link from 'next/link'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <header className='h-48 bg-primary'>
      <section className='container mx-auto p-0 flex justify-between pt-10'>
        <Link href='/'>
          <h1 className='flex item-center gap-1 text-3xl font-bold text-white'>
            <span>
              <Hexagon size={36} fill='blue' />
            </span>
            AppTracker
          </h1>
        </Link>
        <div className='flex gap-2 items-center'>
          <SignedOut>
            <Button variant='outline' size='sm' asChild>
              <Link href='sign-in'> Sign In</Link>
            </Button>
            <Button variant='outline' size='sm' asChild>
              <Link href='sign-up'> Sign Up</Link>
            </Button>
          </SignedOut>
          <ModeToggle />
          <SignedIn>
            <div className='pl-2 flex item-center'>
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </section>
    </header>
  )
}
export default Header
