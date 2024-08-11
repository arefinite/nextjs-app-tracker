import { SignUp } from '@clerk/nextjs'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Lock } from 'lucide-react'

const SignUpPage = () => {
  return (
    <div className='flex gap-2 flex-col'>
      <Alert className='flex items-center justify-center gap-2'>
        <div>
          <Lock color='red' />
        </div>
        <div className='text-sm'>
          For demo credentials, please visit sign-in page
        </div>
      </Alert>
      <SignUp />
    </div>
  )
}
export default SignUpPage
