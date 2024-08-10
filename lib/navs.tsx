import {
  BriefcaseBusiness,
  ChartColumnDecreasing,
  PackagePlus,
} from 'lucide-react'

type NavType = {
  label: string
  href: string
  icon: React.ReactNode
}

export const navs: NavType[] = [
  {
    label: 'Jobs',
    href: '/jobs',
    icon: <BriefcaseBusiness size={20} />,
  },
  {
    label: 'Add Job',
    href: '/add-job',
    icon: <PackagePlus size={20} />,
  },

  {
    label: 'Reports',
    href: '/reports',
    icon: <ChartColumnDecreasing size={20} />,
  },
]
