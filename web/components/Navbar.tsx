'use client'

import { useRouter } from 'next/navigation'
import { ModeToggle } from '@/components/Mode-toggle'
import { Button } from '@/components/ui/button'

import { SiGooglemaps, SiTelegram, SiWhatsapp } from 'react-icons/si'
import Link from 'next/link'

function Navbar() {
  const dataNavbar = [
    {
      id: 1,
      name: 'Whatsapp',
      buttonClass: 'px-3 sm:px-4',
      buttonVariant: 'default',
      linkClass: 'flex items-center gap-0 sm:gap-2',
      link: 'https://wa.me/50755555555',
      icon: <SiWhatsapp />,
    },
    {
      id: 2,
      name: 'Telegram',
      buttonClass: 'px-3 sm:px-4',
      buttonVariant: 'outline',
      linkClass: 'flex items-center gap-0 sm:gap-2',
      link: 'https://t.me/+50755555555',
      icon: <SiTelegram />,
    },
    {
      id: 3,
      name: 'Location',
      buttonClass: 'px-3 sm:px-4',
      buttonVariant: 'outline',
      linkClass: 'flex items-center gap-0 sm:gap-2',
      link: 'https://maps.app.goo.gl/s33b44Wafz2ejLG7A',
      icon: <SiGooglemaps />,
    },
  ]
  const router = useRouter()
  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-4xl ">
      <h1 className="text-3xl mr-2" onClick={() => router.push('/')}>
        erk
        <span className="font-bold">.tech</span>
      </h1>
      <div className="flex items-center justify-between gap-2">
        <ul className="flex items-center justify-between gap-2">
          {dataNavbar.map((data) => (
            <li key={data.id}>
              <Button
                className={data.buttonClass}
                variant={
                  data.buttonVariant as
                    | 'default'
                    | 'ghost'
                    | 'link'
                    | 'destructive'
                    | 'outline'
                    | 'secondary'
                    | null
                    | undefined
                }
                asChild
              >
                <Link className={data.linkClass} href={data.link}>
                  {data.icon}
                  <span className="hidden sm:inline-block">{data.name}</span>
                </Link>
              </Button>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
