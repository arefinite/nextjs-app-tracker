import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { getDailyChart } from '@/actions/getDailyChart'
import { getReportAction } from '@/actions/getReportAction'
import ChartContainer from '@/components/report/ChartContainer'
import ReportsContainer from '@/components/report/ReportsContainer'

async function ReportPage() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['reports'],
    queryFn: () => getReportAction(),
  })
  await queryClient.prefetchQuery({
    queryKey: ['charts'],
    queryFn: () => getDailyChart(),
  })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ReportsContainer />
      <ChartContainer />
    </HydrationBoundary>
  )
}
export default ReportPage
