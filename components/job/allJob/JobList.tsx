'use client'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import JobCard from '@/components/job/allJob/JobCard'
import { getAllJobsAction } from '@/actions/getAllJobsAction'
import { Loader2 } from 'lucide-react'

const JobList = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''
  const jobStatus = searchParams.get('jobStatus') || 'All'
  const pageNumber = Number(searchParams.get('pageNumber')) || 1
  const { data, isPending } = useQuery({
    queryKey: ['jobs', search, jobStatus, pageNumber],
    queryFn: () => getAllJobsAction({ search, jobStatus, page: pageNumber }),
  })
  const jobs = data?.jobs || []
  if (isPending) return <Loader2 className='animate-spin' />
  if (jobs.length < 1) return <p>No jobs found</p>
  return (
    <>
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-4 w-full'>
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  )
}
export default JobList
