'use client'
import { useForm } from 'react-hook-form'
import {
  CustomTextField,
  CustomSelectField,
  CustomTextArea,
} from '@/components/job/createJob/FormComponents'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  JobStatus,
  JobMode,
  createAndEditJobSchema,
  CreateAndEditJobType,
  WorkType,
} from '@/lib/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { createJobAction } from '@/actions/createJobAction'
import toast from 'react-hot-toast'
import { Loader2 } from 'lucide-react'
const CreateJobForm = () => {
  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: '',
      company: '',
      location: '',
      status: JobStatus.Pending,
      mode: JobMode.FullTime,
      type: WorkType.Remote,
      note: '',
    },
  })
  const queryClient = useQueryClient()
  const router = useRouter()
  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditJobType) => createJobAction(values),
    onSuccess: data => {
      if (!data.job) {
        toast.error('Something went wrong!')
        return
      }
      toast.success('Job added successfully')
      queryClient.invalidateQueries({ queryKey: ['jobs'] })
      queryClient.invalidateQueries({ queryKey: ['reports'] })
      queryClient.invalidateQueries({ queryKey: ['charts'] })
      router.push('/jobs')
    },
  })

  const onSubmit = (values: CreateAndEditJobType) => {
    mutate(values)
  }
  return (
    <Card className='w-[700px]'>
      <CardHeader>
        <CardTitle>Add Applied Job</CardTitle>
        <CardDescription>Add a job details you have applied</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='grid grid-cols-2 gap-4'>
              <CustomTextField name='position' control={form.control} />
              <CustomTextField name='company' control={form.control} />
              <CustomTextField name='location' control={form.control} />
              <CustomSelectField
                name='status'
                control={form.control}
                items={Object.values(JobStatus)}
                labelText='Job Status'
              />
              <CustomSelectField
                name='mode'
                control={form.control}
                items={Object.values(JobMode)}
                labelText='Job Mode'
              />
              <CustomSelectField
                name='type'
                control={form.control}
                items={Object.values(WorkType)}
                labelText='Job Type'
              />
              <div className='col-span-2'>
                <CustomTextArea name='note' control={form.control} />
              </div>
            </div>
            <Button
              type='submit'
              className='mt-4 flex gap-2'
              disabled={isPending}
            >
              {isPending && <Loader2 className='animate-spin' size={18} />}
              {isPending ? 'Adding Applied Job...' : 'Add Applied Job'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
export default CreateJobForm
