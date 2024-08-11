'use client'
import { Terminal } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { TypeAnimation } from 'react-type-animation'
import { tips } from '@/lib/tips'



const JobTips = () => {
  return (
    <Alert className='my-6'>
      <Terminal className='h-4 w-4' />
      <AlertTitle>Job Tips!</AlertTitle>
      <AlertDescription>
        <TypeAnimation
          sequence={tips.map(tip => [tip.tip, tip.delay]).flat()}
          wrapper='span'
          speed={50}
          className='inline-block'
          repeat={Infinity}
        />
      </AlertDescription>
    </Alert>
  )
}
export default JobTips
