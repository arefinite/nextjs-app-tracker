import { Skeleton } from '@/components/ui/skeleton'

const loading = () => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-4 gap-6'>
      <div className='col-span-1'>
        <Skeleton className='h-[280px]  rounded-xl' />
      </div>
      <div className='xl:col-span-3 h-[500px]'>
        <Skeleton className='rounded-xl h-full' />
      </div>
    </div>
  )
}
export default loading
