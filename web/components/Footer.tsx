import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

const dataFooter = [
  { id: 1, name: 'Tracking', link: '/tracking' },

  {
    id: 2,
    name: 'Location',
    link: 'https://maps.app.goo.gl/s33b44Wafz2ejLG7A',
  },
]

function Footer() {
  return (
    <footer className="mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p>
            <span className="font-bold">erk</span>.tech
          </p>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {dataFooter.map((data) => (
              <li key={data.id}>
                <Link href={data.link} className="hover:underline mr-4 md:mr-6">
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <p className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; 2024 erk.tech
        </p>
      </div>
    </footer>
  )
}

export default Footer
