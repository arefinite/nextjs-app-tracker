import Navbar from '@/components/shared/Navbar'
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs'

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <SignedIn>
        <section className='my-8'>
          <Navbar />
          {children}
        </section>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}
export default layout
