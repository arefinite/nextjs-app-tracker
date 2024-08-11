import { Skeleton } from '@/components/ui/skeleton'

const loading = () => {
  return (
    <div>
      <Skeleton className='h-[500px] w-full xl:w-[700px]  rounded-xl' />
    </div>
  )
}
export default loading
