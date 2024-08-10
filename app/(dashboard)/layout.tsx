import Navbar from '@/components/shared/Navbar'

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <section className='mt-8'>
      <Navbar />
      {children}
    </section>
  )
}
export default layout
