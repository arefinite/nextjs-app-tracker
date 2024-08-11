import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '../ui/skeleton'

type ReportsCardsProps = {
  title: string
  value: number
}

const ReportsCard = ({ title, value }: ReportsCardsProps) => {
  return (
    <Card className='bg-muted'>
      <CardHeader className='flex flex-row justify-between items-center'>
        <CardTitle className='capitalize text-lg'>{title}</CardTitle>
        <CardDescription
          className={`text-2xl font-extrabold text-primary mt-[0px!important] ${
            title === 'jobs rejected' ? 'text-red-500' : ''
          }`}
        >
          {value}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

export function ReportsLoadingCard() {
  return (
    <Card>
      <CardHeader>
        <div className='flex justify-between'>
          <Skeleton className='h-4 w-[200px]' />
          <Skeleton className='h-4 w-[50px]' />
        </div>
      </CardHeader>
    </Card>
  )
}

export default ReportsCard
