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
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import BtnDeleteJob from './BtnDeleteJob'
import JobInfo from './JobInfo'
import {
  BookmarkCheck,
  BriefcaseBusiness,
  Building2,
  Calendar,
  CalendarDays,
  Captions,
  Eye,
  FilePenLine,
  Globe,
  MapPin,
  NotebookPen,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

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
        <CardTitle className='text-lg'>{job.position}</CardTitle>
        <CardDescription>
          {job.company.at(0)?.toUpperCase() + job.company.slice(1)}
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className='grid grid-cols-2 gap-2 text-sm mt-4 '>
        <JobInfo icon={<BriefcaseBusiness size={20} />} text={job.mode} />
        <JobInfo
          icon={<MapPin size={20} />}
          text={job.location.at(0)?.toUpperCase() + job.location.slice(1)}
        />
        <JobInfo icon={<CalendarDays size={20} />} text={date} />
        <JobInfo icon={<Globe size={20} />} text={job.type} />
        <Badge className='mt-2' variant={badgeVariant}>
          <JobInfo icon={<BookmarkCheck size={16} />} text={job.status} />
        </Badge>
      </CardContent>
      <CardFooter className='flex justify-end gap-2'>
        <Drawer>
          <DrawerTrigger asChild>
            <Button size='sm' variant='secondary'>
              <Eye color='green' size='20' />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className='flex items-center gap-2'>
                <Captions />
                <p className='text-left'>Applied position: {job.position}</p>
              </DrawerTitle>
              <DrawerDescription className='flex gap-2 items-center'>
                <Building2 size={14} />
                at {job.company.at(0)?.toUpperCase() +
                  job.company.slice(1)}{' '}
                <MapPin size={14} />
                in {job.location.at(0)?.toUpperCase() + job.location.slice(1)}
              </DrawerDescription>
            </DrawerHeader>
            <div className='flex flex-col gap-2 px-4 py-2'>
              <p className='flex gap-1 items-center'>
                <BriefcaseBusiness size={14} />
                <strong>Mode:</strong>
                {job.mode}
              </p>
              <p className='flex gap-1 items-center'>
                <Globe size={14} />
                <strong>Type:</strong>
                {job.type}
              </p>
              <p className='flex gap-1 items-center'>
                <BookmarkCheck size={14} />
                <strong>Status:</strong>
                {job.status}
              </p>
              <p className='flex gap-1 items-center'>
                <NotebookPen size={14} />
                <strong>Note:</strong>
                {job.note || 'No additional notes.'}
              </p>

              <p className='flex gap-1 items-center'>
                <Calendar size={14} />
                <strong>Applied Date</strong>
                {date}
              </p>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button>Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

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
