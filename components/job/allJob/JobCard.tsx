import { JobType } from '@/lib/types'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import BtnDeleteJob from './BtnDeleteJob'
import JobInfo from './JobInfo'
import {
  BookmarkCheck,
  Briefcase,
  BriefcaseBusiness,
  CalendarDays,
  Edit2,
  FilePenLine,
  Globe,
  MapPin,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const JobCard = ({ job }: { job: JobType }) => {
  const date = new Date(job.createdAt).toLocaleDateString()
  const badgeVariant =
    job.status === 'Pending'
      ? 'secondary'
      : job.status === 'Rejected'
      ? 'destructive'
      : 'outline'
  return (
    <Card className='w-full'>
      <CardHeader className='py-3'>
        <CardTitle>{job.position}</CardTitle>
        <CardDescription>{job.company.at(0)?.toUpperCase()+ job.company.slice(1)}</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className='grid grid-cols-2 gap-2 text-sm mt-4 '>
        <JobInfo icon={<BriefcaseBusiness size={20} />} text={job.mode} />
        <JobInfo icon={<MapPin size={20} />} text={job.location.at(0)?.toUpperCase()+ job.location.slice(1)} />
        <JobInfo icon={<CalendarDays size={20} />} text={date} />
        <JobInfo icon={<Globe size={20} />} text={job.type} />
        <Badge className='mt-2' variant={badgeVariant}>
          <JobInfo icon={<BookmarkCheck size={16} />} text={job.status} />
        </Badge>
      </CardContent>
      <CardFooter className='flex justify-end gap-2'>
        <Button size='sm' asChild>
          <Link href={`/jobs/${job.id}`} className='flex gap-2'>
            <FilePenLine size={20} />
          </Link>
        </Button>
        <BtnDeleteJob id={job.id} />
      </CardFooter>
    </Card>
  )
}
export default JobCard
