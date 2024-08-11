'use server'
import { checkUser } from "@/lib/checkUser"
import prisma from "@/lib/db"
import { redirect } from "next/navigation"

type GetTotalChartType = {
  status: string
  count: number
}[]

export const getTotalChart = async (): Promise<GetTotalChartType> => {
  const userId = checkUser()
  
  try {
    const jobs = await prisma.job.groupBy({
      by: ['status'],
      _count: {
        status: true,
      },
      where: {
        clerkId: userId,
      },
    })

    return jobs.map(job => ({
      status: job.status,
      count: job._count.status,
    }))
  } catch (error) {
    redirect('/jobs')
  }
}
