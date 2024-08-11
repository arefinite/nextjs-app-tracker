import { Hexagon, Menu } from 'lucide-react'
import { Button } from '../ui/button'
import { ModeToggle } from '../theme/ModeToggle'
import Link from 'next/link'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const Header = () => {
  return (
    <header className='h-48 bg-primary px-4 xl:px-0'>
      <section className='container mx-auto p-0 flex justify-between pt-10'>
        <Link href='/'>
          <h1 className='flex items-center gap-1 md:text-3xl text-2xl font-bold text-white'>
            <span>
              <Hexagon size={36} fill='blue' />
            </span>
            AppTracker
          </h1>
        </Link>
        <div className='gap-2 items-center hidden xl:flex'>
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
        <div className='flex gap-3 items-center xl:hidden'>
          <ModeToggle />
          <SignedIn>
            <div className='pl-2 flex item-center'>
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <Sheet>
              <SheetTrigger>
                <Menu size={36} color='white' />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className='my-4'>Sign In or Sign Up</SheetTitle>
                  <SheetDescription className='flex flex-col gap-2'>
                    <SheetClose asChild>
                      <Button variant='default' size='sm' asChild>
                        <Link href='sign-in'> Sign In</Link>
                      </Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button variant='default' size='sm' asChild>
                        <Link href='sign-up'> Sign Up</Link>
                      </Button>
                    </SheetClose>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </SignedOut>
        </div>
      </section>
    </header>
  )
}
export default Header
