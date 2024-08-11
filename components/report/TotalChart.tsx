import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { useQuery } from '@tanstack/react-query'
import { getTotalChart } from '@/actions/getTotalChart'
import { Square } from 'lucide-react'
import { Skeleton } from '../ui/skeleton'

const COLORS = ['#2563eb', '#34d399', '#f87171'] // Colors for Pending, Interview, Rejected

const TotalChart = () => {
  const { data, isPending } = useQuery({
    queryKey: ['totalCharts'],
    queryFn: () => getTotalChart(),
  })

  if (isPending) return <Skeleton />
  if (!data || data.length < 1) return null
  const totalJobs = data.reduce((acc, { count }) => acc + count, 0)
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Job Applications</CardTitle>
        <CardDescription className='flex justify-between'>
          <div>Distribution of job applications by status</div>
          <div className='flex flex-col'>
            <span className='flex gap-2 items-center'>
              <Square size={14} fill='#34d399' />
              Pending <span className='hidden xl:block'>Jobs</span>
            </span>
            <span className='flex gap-2 items-center'>
              <Square size={14} fill='#2563eb' />
              Interview <span className='hidden xl:block'>Set</span>
            </span>
            <span className='flex gap-2 items-center'>
              <Square size={14} fill='#f87171' />
              Rejected <span className='hidden xl:block'>Jobs</span>
            </span>
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent className='flex justify-center items-center'>
        <ResponsiveContainer width='100%' height={300} className='relative'>
          <PieChart>
            <Pie
              data={data}
              cx='50%'
              cy='50%'
              innerRadius={70}
              outerRadius={100}
              fill='#8884d8'
              paddingAngle={5}
              dataKey='count'
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => [
                value,
                `${((value / totalJobs) * 100).toFixed()}% Jobs`,
              ]}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
export default TotalChart
