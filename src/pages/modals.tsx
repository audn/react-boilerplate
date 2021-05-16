import React from 'react';

import { Layout } from '../common/layouts/Layout';
import Container from '../common/components/Container';
import Hero from '../common/components/Hero';

import { fadeIn } from '../common/utils/data/animations';
import { motion } from 'framer-motion';

const Modals = () => {
  return (
    <Layout title={'Modals | Boilerplate'}>
      <Hero>
        <Container>
          <motion.div
            className="w-full text-on-naked-800"
            initial="initial"
            animate="enter"
            variants={fadeIn}
          >
            <h1 className={'font-bold text-white text-3xl mb-6'}>Modals</h1>
            <h2 className={'font-medium text-on-hero-900'}>WIP </h2>
          </motion.div>
        </Container>
      </Hero>
    </Layout>
  );
};

export default Modals;
