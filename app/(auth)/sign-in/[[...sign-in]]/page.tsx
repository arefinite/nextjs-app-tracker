import { SignIn } from '@clerk/nextjs'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Lock } from 'lucide-react'

const SignInPage = () => {
  return (
    <div className='flex gap-2 flex-col mt-8'>
      <Alert className='flex items-center justify-center gap-6'>
        <div>
          <Lock color='red' />
        </div>
        <div>
          <AlertTitle>Demo Account</AlertTitle>
          <AlertDescription className='mt-2'>
            <p>
              Email:
              <span className='text-primary ml-1'>demo@demo.com</span>
            </p>
            <p>
              Password:<span className='text-primary ml-1'>123456</span>
            </p>
          </AlertDescription>
        </div>
      </Alert>
      <SignIn />
    </div>
  )
}
export default SignInPage
