import { ReportsLoadingCard } from '@/components/report/ReportsCard'

function loading() {
  return (
    <div className='grid gap-4 lg:grid-cols-4'>
      <ReportsLoadingCard />
      <ReportsLoadingCard />
      <ReportsLoadingCard />
      <ReportsLoadingCard />
    </div>
  )
}
export default loading
