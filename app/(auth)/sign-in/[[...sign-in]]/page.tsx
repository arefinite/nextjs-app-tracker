import { SignIn } from '@clerk/nextjs'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Lock } from 'lucide-react'

const SignInPage = () => {
  return (
    <div className='flex gap-2 flex-col'>
      <Alert className='flex items-center justify-center gap-6'>
        <div>
          <Lock color='red' />
        </div>
        <div>
          <AlertTitle>Demo Account</AlertTitle>
          <AlertDescription className='mt-2'>
            <p>
              <span>Email:</span> demo@demo.com
            </p>
            <p>
              <span>Password:</span> 123456
            </p>
          </AlertDescription>
        </div>
      </Alert>
      <SignIn />
    </div>
  )
}
export default SignInPage
