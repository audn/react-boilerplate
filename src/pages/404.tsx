import { DefaultLayout } from '../common/layouts/Default';

import { motion } from 'framer-motion';
import { fadeIn } from '../common/utils/data/animations';
import Layout from '../common/components/layout/Layout';

export default function Custom404() {
  return (
    <DefaultLayout title={'404 | Boilerplate'}>
      <Layout.Container center>
        <motion.div
          className="w-full"
          initial="initial"
          animate="enter"
          variants={fadeIn}
        >
          <div className={'py-12 text-center'}>
            <h4 className={'font-medium text-brand-primary-100 text-sm mb-6'}>
              404
            </h4>
            <h1 className={'font-bold text-white text-3xl mb-6'}>
              We couldn't find this page.
            </h1>
          </div>
        </motion.div>
      </Layout.Container>
    </DefaultLayout>
  );
}
