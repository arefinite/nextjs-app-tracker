'use client'
import JobTips from '@/components/JobTips'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import bannerImage from '@/public/banner.svg'

const Page = () => {
  const { isSignedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isSignedIn) {
      router.push('/jobs')
    }
  }, [isSignedIn, router])

  if (!isSignedIn) {
    router.push('/')
  }

  return (
    <section className='flex flex-col-reverse lg:flex-row mt-8 lg:mt-0 flex-1 items-center justify-between gap-6 '>
      <div className='flex-1'>
        <h1 className='text-3xl font-bold tracking-tight'>
          Cloud Based <span className='text-primary'>Job Application</span>{' '}
          Tracker
        </h1>
        <p className='tracking-tighter lg:tracking-wider'>
          Streamline Your Job Hunt, Anytime, Anywhere!
        </p>
        <p className='my-6'>
          AppTracker is a powerful cloud-based job application tracking app
          designed to simplify your job search process. Effortlessly manage and
          organize your job applications, interviews, and follow-ups all in one
          place.
        </p>
        <JobTips />
        <div className='flex flex-col xl:flex-row gap-3 xl:gap-2'>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Explore Features</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Key Features:</DialogTitle>
                <DialogDescription>
                  <ul className='flex flex-col gap-2 mt-4'>
                    <li>
                      <span className='font-bold text-primary block'>
                        Next.js Server Actions:
                      </span>
                      Implements server-side logic for handling requests,
                      improving performance and scalability by processing data
                      on the server.
                    </li>
                    <li>
                      <span className='font-bold text-primary block'>
                        Interactive Charts:
                      </span>
                      Provides visual insights into job application trends with
                      multiple chart types, allowing users to analyze their
                      application history and outcomes.
                    </li>
                    <li>
                      <span className='font-bold text-primary block'>
                        Full CRUD Functionality:
                      </span>
                      Allows users to create, read, update, and delete job
                      application records, providing complete control over their
                      job tracking data.
                    </li>
                    <li>
                      <span className='font-bold text-primary block'>
                        Schema-Based Validation:
                      </span>
                      Ensures data integrity and consistency across the
                      application by validating input data against predefined
                      schemas.
                    </li>
                    <li>
                      <span className='font-bold text-primary block'>
                        Advanced Search and Pagination:
                      </span>
                      Enables users to easily navigate and find specific job
                      applications, with the ability to filter results and
                      browse through pages efficiently.
                    </li>
                  </ul>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant='outline'>Discover Technologies</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Popular Technologies Used:</DialogTitle>
                <DialogDescription>
                  <ul className='flex flex-col gap-2 mt-4'>
                    <li>
                      <span className='text-primary'>TypeScript</span> (Language)
                    </li>
                    <li>
                      <span className='text-primary'>NextJS</span> (Building the
                      frontend & backend)
                    </li>
                    <li>
                      <span className='text-primary'>Tailwind CSS</span> (Styling the app)
                    </li>
                    <li>
                      <span className='text-primary'>Shadcn/ui</span> (Component
                      Library)
                    </li>
                    <li>
                      <span className='text-primary'>TanStack Query</span> (Data
                      fetching and mutating)
                    </li>
                    <li>
                      <span className='text-primary'>React Hook Form</span> (Form handling)
                    </li>
                    <li>
                      <span className='text-primary'>Zod</span> (Validation in
                      frontend and backend)
                    </li>
                    <li>
                      <span className='text-primary'>Prisma</span> (Database
                      ORM)
                    </li>
                    <li>
                      <span className='text-primary'>Postgres</span> (Database)
                    </li>
                    <li>
                      <span className='text-primary'>Clerk</span> (Authentication)
                    </li>
                    <li>
                      <span className='text-primary'>Recharts</span> (Chart)
                    </li>
                    <li>
                      <span className='text-primary'>Vercel</span> (Deployment)
                    </li>
                  </ul>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className='flex-1 flex justify-end'>
        <Image src={bannerImage} width={530} alt='AppTracker' />
      </div>
    </section>
  )
}

export default Page
