'use client'

import { getSingleJobAction } from '@/actions/getSingleJobAction'
import { updateJobAction } from '@/actions/updateJobAction'
import { Form } from '@/components/ui/form'
import {
  createAndEditJobSchema,
  CreateAndEditJobType,
  JobMode,
  JobStatus,
  WorkType,
} from '@/lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import {
  CustomSelectField,
  CustomTextArea,
  CustomTextField,
} from '../createJob/FormComponents'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Loader2 } from 'lucide-react'

function EditJobForm({ jobId }: { jobId: string }) {
  const queryClient = useQueryClient()

  const router = useRouter()

  const { data } = useQuery({
    queryKey: ['job', jobId],
    queryFn: () => getSingleJobAction(jobId),
  })

  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditJobType) =>
      updateJobAction(jobId, values),
    onSuccess: data => {
      if (!data) {
        toast.error('something went wrong!')
        return
      }
      toast.success('job updated successfully')
      queryClient.invalidateQueries({ queryKey: ['jobs'] })
      queryClient.invalidateQueries({ queryKey: ['job', jobId] })
      queryClient.invalidateQueries({ queryKey: ['stats'] })
      router.push('/jobs')
    },
  })

  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: data?.position || '',
      company: data?.company || '',
      location: data?.location || '',
      status: (data?.status as JobStatus) || JobStatus.Pending,
      mode: (data?.mode as JobMode) || JobMode.FullTime,
      type: (data?.type as WorkType) || WorkType.Remote,
      note: data?.note || '',
    },
  })

  function onSubmit(values: CreateAndEditJobType) {
    mutate(values)
  }

  return (
    <Card className='w-[700px]'>
      <CardHeader>
        <CardTitle>Edit Applied Job</CardTitle>
        <CardDescription>Edit job details you have applied</CardDescription>
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
              {isPending ? 'Editing Applied Job...' : 'Edit Applied Job'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
export default EditJobForm
