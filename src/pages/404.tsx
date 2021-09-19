import Layout from '../common/components/layout/Layout';

import { DefaultLayout } from '../common/layouts/Default';
import Animate from '../common/components/layout/Animate';

import { fadeIn } from '../common/utils/data/animations';

export default function Custom404() {
  return (
    <DefaultLayout title={'404 | Boilerplate'}>
      <Layout.Container center>
        <Animate variants={fadeIn}>
          <div className={'py-12 text-center'}>
            <h4 className={'font-medium text-brand-primary-100 text-sm mb-6'}>
              404
            </h4>
            <h1 className={'font-bold text-white text-3xl mb-6'}>
              We couldn't find this page.
            </h1>
          </div>
        </Animate>
      </Layout.Container>
    </DefaultLayout>
  );
}
