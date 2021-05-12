import React, { SyntheticEvent } from 'react';

import { Layout } from '../common/layouts/Layout';
import Container from '../common/components/Container';
import Hero from '../common/components/Hero';

import { fadeIn } from '../common/utils/data/animations';
import { motion } from 'framer-motion';

import Form from '../common/components/Form';

const Forms = () => {
  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    console.log('Sent!');
  }

  return (
    <Layout title={'Forms'} url={''}>
      <Hero>
        <Container>
          <motion.div
            className="w-full text-on-naked-default"
            initial="initial"
            animate="enter"
            variants={fadeIn}
          >
            <h1 className={'font-semibold text-on-hero-title text-2xl mb-6'}>
              Form
            </h1>
            <Form.Layout onSubmit={(event) => handleSubmit(event)}>
              <Form.Input
                title={'Thoughts'}
                description={'Share your thoughts with us!'}
                error={'ss'}
                placeholder={'Type' + ' here'}
              />
            </Form.Layout>
          </motion.div>
        </Container>
      </Hero>
    </Layout>
  );
};

export default Forms;
