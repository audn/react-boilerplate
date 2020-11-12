import React from 'react';
import { motion } from 'framer-motion';
import {
  first,
  second,
  third,
  fourth,
  fifth,
} from '../utility/data/Animations';
import { ExampleLayout } from '../ui/layouts/ExampleLayout';

export default function About() {
  return (
    <ExampleLayout>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <motion.h2
            initial="initial"
            animate="enter"
            variants={first}
            className="font-bold mb-3 text-xl text-gray-200"
          >
            What is Tailwind?
          </motion.h2>
          <motion.p
            initial="initial"
            animate="enter"
            variants={second}
            className="mb-6 text-gray-500"

          >
            Tailwind CSS is a highly customizable, low-level CSS framework that
            gives you all of the building blocks you need to build bespoke
            designs without any annoying opinionated styles you have to fight to
            override.
          </motion.p>
          <motion.h2
            initial="initial"
            animate="enter"
            variants={third}
            className="font-bold mb-3 text-xl text-gray-200"
          >
            What is Next.js?
          </motion.h2>
          <motion.p
            initial="initial"
            transition={{ duration: 5 }}
            animate="enter"
            variants={fourth}
            className="mb-6 text-gray-500"

          >
            Next.js is a minimalistic framework for creating server-rendered
            React applications.
          </motion.p>
        </div>

        <div className="md:ml-6 md:w-1/2">
          <motion.img
            initial="initial"
            animate="enter"
            className="md:ml-auto"
            variants={fifth}
            src="https://picsum.photos/400/250"
          />
        </div>
      </div>
    </ExampleLayout>
  );
}
