import { useState } from 'react';

import { Layout } from '../common/layouts/Layout';
import Container from '../common/components/Container';
import Button from '../common/components/Button';

import { motion } from 'framer-motion';
import { fadeIn } from '../common/utils/data/animations';

import { posts } from '../common/utils/data/posts';
import { APIPosts } from '../common/lib/types';
import { HydratePosts } from '../common/utils/helpers/hydration/';

export default function Home({ posts }: APIPosts) {
  const [disable, setDisable] = useState<boolean>(false);

  const hydratePosts = HydratePosts(posts);

  return (
    <Layout title={'Index | Boilerplate'}>
      <Container>
        <motion.div
          className="w-full"
          initial="initial"
          animate="enter"
          variants={fadeIn}
        >
          <div className={'py-12'}>
            <div className={'mb-12'}>
              <h1 className={'font-bold text-white text-3xl mb-6'}>
                React, Next.js & TailwindCSS
              </h1>
              <h2 className={'font-medium text-on-naked-900'}>
                Don't waste time structuring or setting up interfaces on your
                next project!
              </h2>
            </div>
            <Button.Group className="flex mb-6 space-y-5 sm:space-y-0 sm:space-x-5">
              <Button.Primary
                title={`Feedback`}
                className={'!px-12 sm:py-2'}
                route="/forms"
                icon={<i className={'fas fa-envelope mr-3'} />}
              />
              <Button.Secondary
                title={`Disable`}
                onClick={() => setDisable(!disable)}
                disabled={disable}
                className={'!px-12 sm:py-2'}
                icon={<i className={'fas fa-do-not-enter mr-3'} />}
              />
            </Button.Group>
          </div>

          {hydratePosts}
        </motion.div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts,
    },
  };
}
