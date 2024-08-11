'use client'

import { getReportAction } from '@/actions/getReportAction'
import ReportsCard from './ReportsCard'
import { useQuery } from '@tanstack/react-query'

function StatsContainer() {
  const { data, isPending } = useQuery({
    queryKey: ['reports'],
    queryFn: () => getReportAction(),
  })
  const total = data && data?.Pending + data?.Interview + data?.Rejected

  return (
    <div className='grid gap-4 grid-cols-1 xl:grid-cols-4'>
      <ReportsCard title='total applied' value={total || 0} />
      <ReportsCard title='pending jobs' value={data?.Pending || 0} />
      <ReportsCard title='interviews set' value={data?.Interview || 0} />
      <ReportsCard title='jobs rejected' value={data?.Rejected || 0} />
    </div>
  )
}
export default StatsContainer
