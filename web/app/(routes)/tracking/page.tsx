import { InputForm } from './components/InputForm'

import Image from 'next/image'
export default function Tracking() {
  return (
    <div className="flex flex-wrap my-32 lg:my-28 lg:flex-nowrap items-center justify-center">
      <div className="flex flex-col justify-center mx-2 sm:mx-10 text-center md:text-left">
        <h1 className="text-5xl font-bold my-6 ">Tracking</h1>
        <InputForm />
        <div className="flex justify-center lg:justify-start mb-5"></div>
      </div>
      <Image
        src={`/erk-delivery.png`}
        width={500}
        height={500}
        alt="Erk delivery"
        priority
        className="rounded-lg"
      />
    </div>
  )
}
