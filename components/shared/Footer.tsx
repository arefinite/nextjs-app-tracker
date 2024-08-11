import { Separator } from '../ui/separator'

const Footer = () => {
  return (
    <footer className='container mx-auto h-20 flex items-center flex-col justify-center xl:flex-row xl:justify-between text-sm md:text-base '>
      <p>
        &copy; {new Date().getFullYear()} by AppTracker All Rights Reserved.
      </p>
      <p>
        Design and Developed by{' '}
        <span className='text-primary font-bold'>ArefinDev</span>
      </p>
    </footer>
  )
}
export default Footer
