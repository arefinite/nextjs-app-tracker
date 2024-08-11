'use client'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import JobCard from '@/components/job/allJob/JobCard'
import { getAllJobsAction } from '@/actions/getAllJobsAction'
import { Loader2 } from 'lucide-react'
import PaginationButtonContainer from '@/components/PaginationButtonContainer'

const JobList = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''
  const jobStatus = searchParams.get('jobStatus') || 'All'
  const pageNumber = Number(searchParams.get('page')) || 1

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['jobs', search, jobStatus, pageNumber],
    queryFn: () => getAllJobsAction({ search, jobStatus, page: pageNumber }),
    refetchOnWindowFocus: false,
  })

  const jobs = data?.jobs || []
  const count = data?.count || 0
  const page = data?.page || 1
  const totalPages = data?.totalPages || 0

  if (isLoading) return <Loader2 className='animate-spin' />
  if (jobs.length < 1) return <p>No jobs found</p>

  return (
    <>
      <div className='mb-4 text-sm'>
        {count} {`${count > 1 ? 'jobs' : 'job'}`} found
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full'>
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      <div className='flex justify-center xl:justify-end mt-6'>
        {totalPages < 2 ? null : (
          <PaginationButtonContainer
            currentPage={page}
            totalPages={totalPages}
          />
        )}
      </div>
    </>
  )
}

export default JobList
