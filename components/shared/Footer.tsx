import { Separator } from '../ui/separator'

const Footer = () => {
  return (
    <footer className='container mx-auto p-0 h-20 flex items-center justify-between'>
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
