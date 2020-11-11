import { motion } from 'framer-motion'
import { first, second } from '~/utility/data/Animations'

import Twemoji from '~/utility/Twemoji'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.img
        src="https://picsum.photos/600/400"
        className="max-w-xl w-full"
        initial="initial"
        animate="enter"
        variants={first}
      />
      <motion.h2
        initial="initial"
        animate="enter"
        className="bg-indigo-400 font-bold my-8 p-3 text-lg md:text-2xl text-white"
        variants={second}
      >
        <Twemoji emoji="👋" /> Hi! Welcome to your first Next.js site.
      </motion.h2>
    </div>
  )
}

export default Home
