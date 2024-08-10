type JobInfoProps = {
  icon: React.ReactNode
  text: string
}

const JobInfo = ({ icon, text }: JobInfoProps) => {
  return (
    <div className='flex gap-2 items-center'>
      {icon}
      {text}
    </div>
  )
}
export default JobInfo
