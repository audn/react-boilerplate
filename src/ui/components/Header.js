import Link from 'next/link'
import Navigation from '~/ui/components/Navigation'
import { useState } from 'react'

const useHeaderState = () => {
  const [isOpen, setIsOpen] = useState(false)
  return {
    isOpen,
    setIsOpen,
    toggleIsOpen: () => setIsOpen(!isOpen)
  }
}

const Header = () => {
  const { isOpen, toggleIsOpen } = useHeaderState()

  return (
    <header className="bg-gray-300 border-b border-gray-400">
      <div className="flex flex-wrap md:flex-no-wrap items-center justify-between max-w-6xl mx-auto p-4 md:p-8">
        <div className="flex items-center">
          <Link href="/">
            <a className="font-bold text-gray-800 text-xl">MyApp</a>
          </Link>
        </div>

        <div
          className="flex md:hidden cursor-pointer bg-gray-400 items-center px-3 py-2 rounded text-gray-6800"
          onClick={toggleIsOpen}
        >
          <i className={`${isOpen ? `far fa-times` : `far fa-bars`}`}></i>
        </div>

        <ul
          className={`${
            isOpen ? `block` : `hidden`
          } md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto select-none`}
        >
          {Navigation.map(({ title, route }, i) => (
            <li className="mt-3 md:mt-0 md:ml-6" key={title}>
              <Link href={route}>
                <a className="hover:underline font-medium block text-blue-900">
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export { Header as default, useHeaderState }
