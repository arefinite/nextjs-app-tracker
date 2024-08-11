'use server'
import { checkUser } from "@/lib/checkUser"
import prisma from "@/lib/db";
import dayjs from 'dayjs';
import { redirect } from "next/navigation";

type GetDailyChartType = {
  date: string
  count: number
}[]

export const getDailyChart = async (): Promise<GetDailyChartType> => {
  const userId = checkUser()
  const sevenDaysAgo = dayjs().subtract(7, 'days').toDate()
  
  try {
    const jobs = await prisma.job.findMany({
      where: {
        clerkId: userId,
        createdAt: {
          gte: sevenDaysAgo,
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    })

    let applicationsPerDay = jobs.reduce((acc, job) => {
      const date = dayjs(job.createdAt).format('DD MMM')

      const existingEntry = acc.find(entry => entry.date === date)

      if (existingEntry) {
        existingEntry.count += 1
      } else {
        acc.push({ date, count: 1 })
      }

      return acc
    }, [] as Array<{ date: string; count: number }>)

    return applicationsPerDay
  } catch (error) {
    redirect('/jobs')
  }
}
