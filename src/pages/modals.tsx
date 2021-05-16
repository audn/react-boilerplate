import { useState } from 'react';

import { Layout } from '../common/layouts/Layout';
import Container from '../common/components/Container';
import Hero from '../common/components/Hero';
import Modal from '../common/components/Modal';
import Button from '../common/components/Button';

import { fadeIn } from '../common/utils/data/animations';
import { motion } from 'framer-motion';

const Modals = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  function toggleModal() {
    setModalOpen(!isModalOpen);
  }

  return (
    <Layout title={'Modals | Boilerplate'}>
      <Modal.Body open={isModalOpen} onClose={toggleModal} className={'w-96'}>
        <Modal.Content
          icon={<i className={'fas fa-hand-sparkles'} />}
          title={'Are you sure?'}
          description={
            <h4 className={`text-on-modal-900`}>
              This is an inreversible action, be careful!
            </h4>
          }
        />
        <Button.Group className={'w-full mt-10 space-y-5 px-4'}>
          <Button.Primary
            title={'Do it'}
            className={'!w-full !justify-center !flex'}
          />
          <Button.Secondary
            onClick={toggleModal}
            title={'Cancel'}
            className={'!w-full !justify-center !flex'}
          />
        </Button.Group>
      </Modal.Body>
      <Hero>
        <Container>
          <motion.div
            className="w-full text-on-naked-800"
            initial="initial"
            animate="enter"
            variants={fadeIn}
          >
            <h1 className={'font-bold text-white text-3xl mb-6'}>Modals</h1>
            <h2
              className={'font-medium text-on-hero-900'}
              onClick={() => setModalOpen(!isModalOpen)}
            >
              WIP
            </h2>
          </motion.div>
        </Container>
      </Hero>
    </Layout>
  );
};

export default Modals;
