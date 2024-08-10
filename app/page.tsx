import JobTips from '@/components/JobTips'
import { Button } from '@/components/ui/button'
import bannerImage from '@/public/banner.svg'
import Image from 'next/image'
const page = () => {
  return (
    <section className='flex flex-1 items-center justify-between gap-4'>
      <div className='flex-1'>
        <h1 className='text-2xl font-bold tracking-tighter'>
          Cloud Based <span className='text-primary'>Job Application</span>{' '}
          Tracker
        </h1>
        <p className='tracking-wider text-sm'>
          Streamline Your Job Hunt, Anytime, Anywhere!
        </p>
        <p className='my-6'>
          AppTracker is a powerful cloud-based job application tracking app
          designed to simplify your job search process. Effortlessly manage and
          organize your job applications, interviews, and follow-ups all in one
          place.
        </p>
        <JobTips />
        <div className='space-x-2'>
          <Button>Explore Features</Button>
          <Button variant='outline'>Discover Technologies</Button>
        </div>
      </div>
      <div className='flex-1 flex justify-center'>
        <Image src={bannerImage} width={500} alt='AppTracker' />
      </div>
    </section>
  )
}
export default page
