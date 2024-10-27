import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { RiPhoneFindLine, RiPhoneLine } from 'react-icons/ri'

export default function Home() {
  return (
    <div className="flex justify-center items-center mx-auto max-w-6xl">
      <div className="grid items-center lg:grid-cols-2 lg:gap-12 mt-28 mb-10 lg:mx-12">
        <div className="flex flex-col justify-center text-center lg:text-left mx-5 lg:mx-0">
          <h1 className="text-5xl lg:text-6xl font-bold mt-5">
            Hey there, I&apos;m{' '}
            <span className="text-green-700">Eric Zheng</span>
          </h1>
          <p className="mt-3 text-2xl">
            Expert Technician Cellphone Repair & Services in Panama City
          </p>
          <div className="flex justify-center lg:justify-start mt-5 mb-10">
            <Button className="flex mr-2 lg:mr-5" asChild>
              <Link href="tel:50755555555">
                <RiPhoneLine />

                <span>Inquire about pricing</span>
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/tracking">
                <RiPhoneFindLine />
                <span>Track your order</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={`/erk-trabajador.png`}
            className="rounded-lg"
            width={500}
            height={500}
            alt="Erk Trabajador"
            priority
          />
        </div>
      </div>
    </div>
  )
}
