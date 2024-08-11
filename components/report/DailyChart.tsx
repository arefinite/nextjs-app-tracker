import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { useQuery } from '@tanstack/react-query'
import { getDailyChart } from '@/actions/getDailyChart'
import { Loader2 } from 'lucide-react'
import { Skeleton } from '../ui/skeleton'
const DailyChart = () => {
  const { data, isPending } = useQuery({
    queryKey: ['charts'],
    queryFn: () => getDailyChart(),
  })

  if (isPending) return  <Skeleton />
    
  if (!data || data.length < 1) return null
  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Applied Job Chart</CardTitle>
        <CardDescription>
          Graphical interface of daily applied jobs
        </CardDescription>
      </CardHeader>
      <CardContent className=''>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart data={data} margin={{ top: 50, left:-40 }}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='date' />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey='count' fill='#2563eb' barSize={75} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
export default DailyChart
