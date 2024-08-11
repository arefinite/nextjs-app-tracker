'use client'
import DailyChart from './DailyChart'
import TotalChart from './TotalChart'

function ChartContainer() {
  return (
    <section className='mt-16 grid grid-cols-1 xl:grid-cols-2 gap-6'>
      <DailyChart />
      <TotalChart />
    </section>
  )
}
export default ChartContainer
