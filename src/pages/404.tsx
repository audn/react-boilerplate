import { Layout } from '../common/layouts/Layout';
import Container from '../common/components/Container';

import { motion } from 'framer-motion';
import { fadeIn } from '../common/utils/data/animations';

export default function Custom404() {
  return (
    <Layout title={'404 | Boilerplate'}>
      <Container>
        <motion.div
          className="w-full"
          initial="initial"
          animate="enter"
          variants={fadeIn}
        >
          <div className={'py-12 text-center'}>
            <h4 className={'font-medium text-brand-primary-150 text-sm mb-6'}>
              404
            </h4>
            <h1 className={'font-bold text-white text-3xl mb-6'}>
              We couldn't find this page.
            </h1>
          </div>
        </motion.div>
      </Container>
    </Layout>
  );
}
