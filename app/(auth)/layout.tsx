const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <section className='flex w-full justify-center items-center'>
      {children}
    </section>
  )
}
export default layout
