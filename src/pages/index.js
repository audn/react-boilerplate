import { motion } from 'framer-motion'
import { first, second, third, fourth } from '~/utility/data/animations'

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
        className="bg-yellow-400 font-bold my-8 p-3 text-lg md:text-2xl"
        variants={second}
      >
        Hi! Welcome to your first Next.js site.
      </motion.h2>
    </div>
  )
}

export default Home
