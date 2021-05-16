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
    <Layout title={'Index | Boilerlate'}>
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
                <div className={'mt-6 flex items-center flex-wrap gap-2'}>
                  You're currently looking at the{' '}
                  <a
                    href={
                      'https://github.com/audn/frontend-boilerplate/tree/example-site'
                    }
                    target={'_blank'}
                    className={
                      'text-sm sm:text-base px-3 text-on-lightpill-800 rounded-md bg-lightpill-100 py-1 flex' +
                      ' items-center' +
                      ' hover:bg-lightpill-150 hover:text-on-lightpill-900' +
                      ' animate'
                    }
                  >
                    <i className={'fas fa-code-branch mr-2'} />
                    example-site
                  </a>
                  branch, but we recommend cloning the{' '}
                  <a
                    href={'https://github.com/audn/frontend-boilerplate'}
                    target={'_blank'}
                    className={
                      'text-sm sm:text-base text-on-lightpill-800 px-3 rounded-md bg-lightpill-100 py-1 flex' +
                      ' items-center' +
                      ' hover:bg-lightpill-150 hover:text-on-lightpill-900' +
                      ' animate'
                    }
                  >
                    <i className={'fas fa-code-branch mr-2'} />
                    master
                  </a>
                  branch to avoid having to delete components used in this
                  example.
                </div>
              </h2>
            </div>
            <Button.Group className="flex space-y-5 sm:space-y-0 sm:space-x-5 mb-6">
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
