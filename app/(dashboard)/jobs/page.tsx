import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import JobList from '@/components/job/allJob/JobList'
import SearchForm from '@/components/job/allJob/SearchForm'
import { getAllJobsAction } from '@/actions/getAllJobsAction'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
const JobPage = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['jobs', '', 'all', 1],
    queryFn: () => getAllJobsAction({}),
  })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="grid grid-cols-4 gap-4 w-full">
  <Card className="h-fit col-span-1 w-full">
    <CardHeader>
      <CardTitle>Search</CardTitle>
      <CardDescription>Search your applied jobs</CardDescription>
    </CardHeader>
    <CardContent>
      <SearchForm />
    </CardContent>
  </Card>
  <Card className="w-full col-span-3">
    <CardHeader>
      <CardTitle>Jobs</CardTitle>
      <CardDescription>Your jobs based on filter</CardDescription>
    </CardHeader>
    <CardContent className="w-full">
      <JobList />
    </CardContent>
  </Card>
</main>
    </HydrationBoundary>
  )
}
export default JobPage
