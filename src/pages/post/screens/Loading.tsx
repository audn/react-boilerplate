import React from 'react';
import { Layout } from '../../../common/layouts/Layout';
import Container from '../../../common/components/Container';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function Loading() {
  return (
    <Layout title={'Loading post'}>
      <Container alignContent={'center'}>
        <SkeletonTheme color="#1b2c48" highlightColor="#192942">
          <div className={'py-12'}>
            <h4 className={'font-medium text-brand-primary-light text-sm mb-6'}>
              <Skeleton width={100} />
            </h4>
            <h1 className={'font-bold text-white text-3xl mb-6'}>
              <Skeleton width={500} />
            </h1>
            <div className={'max-w-2xl mx-auto'}>
              <h2 className={'text-on-naked-default text-base mt-12'}>
                <div className={'flex gap-2 flex-wrap justify-center'}>
                  <Skeleton width={150} />
                  <Skeleton width={100} />
                  <Skeleton width={200} />
                  <Skeleton width={75} />
                  <Skeleton width={150} />
                  <Skeleton width={100} />
                </div>
              </h2>
            </div>
          </div>
        </SkeletonTheme>
      </Container>
    </Layout>
  );
}

export default Loading;
