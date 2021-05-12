import React from 'react';

import { Layout } from '../common/layouts/Layout';
import Container from '../common/components/Container';
import Hero from '../common/components/Hero';

import { fadeIn } from '../common/utils/data/animations';
import { motion } from 'framer-motion';

const Modals = () => {
  return (
    <Layout title={'Forms'} desc={'hey'}>
      <Hero>
        <Container>
          <motion.div
            className="w-full text-on-naked-default"
            initial="initial"
            animate="enter"
            variants={fadeIn}
          >
            <h1 className={'font-semibold text-on-hero-title text-2xl mb-3'}>
              Modals
            </h1>
            <h2 className={'font-medium text-on-hero-default'}>test </h2>
          </motion.div>
        </Container>
      </Hero>
    </Layout>
  );
};

export default Modals;
