'use client'

import { Input } from '@/components/ui/input'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { JobStatus } from '@/lib/types'
import { Loader2, Search } from 'lucide-react'
import { useTransition } from 'react'

const SearchForm = () => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''
  const jobStatus = searchParams.get('jobStatus') || 'All'

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const search = formData.get('search') as string
    const jobStatus = formData.get('jobStatus') as string
    const query = new URLSearchParams()

    if (search) {
      query.set('search', search)
    }
    if (jobStatus !== 'All') {
      query.set('jobStatus', jobStatus)
    }

    startTransition(() => {
      router.push(`${pathname}?${query.toString()}`)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col gap-4'>
        <Input
          name='search'
          type='text'
          placeholder='Search by Title, Company'
          defaultValue={search}
        />
        <Select name='jobStatus' defaultValue={jobStatus}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {['All', ...Object.values(JobStatus)].map(status => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button type='submit' className='mt-4 flex gap-1 items-center'>
        {isPending ? (
          <Loader2 size={18} className='animate-spin' />
        ) : (
          <Search size={18} />
        )}
        {isPending ? 'Searching...' : 'Search'}
      </Button>
    </form>
  )
}

export default SearchForm
