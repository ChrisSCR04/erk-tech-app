import {
  SiApple,
  SiHonor,
  SiHuawei,
  SiMotorola,
  SiOppo,
  SiSamsung,
  SiXiaomi,
} from 'react-icons/si'

function Brands() {
  return (
    <div className="flex flex-wrap gap-12 p-0 justify-center items-center sm:gap-32 sm:py-16">
      <SiApple size={50} />
      <SiSamsung size={50} />
      <SiXiaomi size={50} />
      <SiOppo size={50} />
      <SiMotorola size={50} />
      <SiHonor size={50} />
      <SiHuawei size={50} />
    </div>
  )
}

export default Brands
