import { deleteJobAction } from '@/actions/deleteJobAction'
import { Button } from '@/components/ui/button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Loader2, Trash2 } from 'lucide-react'
import toast from 'react-hot-toast'

function BtnDeleteJob({ id }: { id: string }) {
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteJobAction(id),
    onSuccess: data => {
      if (!data) {
        toast.error('something went wrong!')
        return
      }
   
      queryClient.invalidateQueries({ queryKey: ['jobs'] })
      queryClient.invalidateQueries({ queryKey: ['reports'] })
      queryClient.invalidateQueries({ queryKey: ['charts'] })

      toast.success('Job deleted successfully')
    },
  })
  return (
    <Button
      size='sm'
      disabled={isPending}
      variant='destructive'
      onClick={() => {
        mutate(id)
      }}
    >
      {isPending ? (
        <Loader2 size={20} className='animate-spin' />
      ) : (
        <Trash2 size={20} />
      )}
    </Button>
  )
}
export default BtnDeleteJob
