import { useQuery } from 'react-query';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { Layout } from '../common/layouts/Layout';
import Container from '../common/components/Container';
import Button from '../common/components/Button';
import Banner from '../common/components/Banner';

import { motion } from 'framer-motion';
import { fadeIn } from '../common/utils/data/animations';

import { useGetPosts } from '../common/utils/hooks/posts';
import { APIPosts } from '../common/lib/types';
import { HydratePosts } from '../common/utils/helpers/hydration/';

const getPosts = async () => {
  return useGetPosts();
};

export default function Home({ posts }: APIPosts) {
  const [disable, setDisable] = useState<boolean>(false);

  const router = useRouter();
  const loading = router.isFallback;

  const { data } = useQuery('posts', getPosts, {
    initialData: posts,
  });
  const hydratePosts = HydratePosts(data, loading);

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
              <h2 className={'font-medium text-on-naked-defaul'}>
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
                      'text-sm sm:text-base px-3 rounded-md bg-types-75 py-1 flex items-center hover:bg-types-100 animate'
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
                      'text-sm sm:text-base px-3 rounded-md bg-types-75 py-1 flex items-center hover:bg-types-100'
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
            <Button.Group className="flex space-y-5 sm:space-y-0 sm:space-x-5  mb-6">
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
          {data === 429 ? (
            <Banner
              leftContent={
                <div className={'flex items-center'}>
                  <img
                    alt="willy wonka"
                    src={'/img/willy-wonka.jpg'}
                    className={'w-24 mr-6 rounded-lg'}
                  />
                  <div className={'flex flex-col'}>
                    <h1 className={'font-bold text-white text-lg mb-3'}>
                      Ratelimited!
                    </h1>
                    <h2>
                      We actually show a couple of blog posts here, but it seems
                      like we were ratelimited by the API.
                      <p className={'mt-4 text-blue-300'}>
                        Try refreshing and you'll see them eventually!{' '}
                      </p>
                    </h2>
                  </div>
                </div>
              }
            />
          ) : (
            hydratePosts
          )}
        </motion.div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await useGetPosts();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      fallback: true,
      posts: data,
    },
  };
}
