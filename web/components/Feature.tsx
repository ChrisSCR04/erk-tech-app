import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'
import { SiGooglemaps } from 'react-icons/si'
import { RiPhoneFindLine } from 'react-icons/ri'

function Feature() {
  return (
    <div className="flex justify-center items-center mx-auto max-w-6xl px-16">
      <div className="grid items-stretch lg:grid-cols-2 lg:gap-12 my-20">
        <div className="flex justify-center">
          <Image
            src={`/erk-best.png`}
            width={500}
            height={500}
            className="rounded-lg"
            alt="Erk Trabajador"
            priority
          />
        </div>
        <div className="flex flex-col text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-bold mt-5">
            If you need a professional, better call{' '}
            <span className=" text-green-700 ">Erk</span>
          </h1>
          <p className="mt-3 text-2xl">Nobody does it better than Erk.</p>
          <div className="flex justify-center lg:justify-start my-5">
            <Button className="flex p-4 mr-2 lg:mr-5" asChild>
              <Link href="https://maps.app.goo.gl/s33b44Wafz2ejLG7A">
                <SiGooglemaps />
                <span>Find my location</span>
              </Link>
            </Button>

            <Button className="flex p-4" variant="secondary" asChild>
              <Link href="/tracking">
                <RiPhoneFindLine />
                <span>Track your order</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
