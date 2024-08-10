import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"


export const checkUser = ():string => {
  const { userId } = auth()
  if (!userId) redirect('/')
  return userId
}