import { useQuery } from 'react-query';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { Layout } from '../common/layouts/Layout';
import Container from '../common/components/Container';
import PostCard from '../common/components/PostCard';
import Button from '../common/components/Button';
import SkeletonPostCard from '../common/components/SkeletonPostCard';

import { motion } from 'framer-motion';
import { fadeIn } from '../common/utils/data/animations';

import { useGetPosts } from '../common/utils/hooks/posts';
import { IPostCard } from '../common/lib/interfaces';
import { APIPosts } from '../common/lib/types';

const getPosts = async () => {
  return useGetPosts();
};
const fakeArray: Array<number> = [1, 2, 3, 4, 5, 6, 7];

export default function Home({ posts }: APIPosts) {
  const [disable, setDisable] = useState<boolean>(false);

  const router = useRouter();
  const { data } = useQuery('posts', getPosts, {
    initialData: posts,
  });
  if (data.results == undefined) {
    return <>error</>;
  }
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
              <h2 className={'font-medium text-on-naked-default'}>
                Take a minute to test responsivity / buttons!
                <p className={'mt-4'}>
                  Click the GitHub icon whenever you're ready to get started.
                </p>
              </h2>
            </div>
            <Button.Group className="flex gap-5 mb-6">
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
          {router.isFallback ? (
            <div
              className={
                'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'
              }
            >
              {fakeArray.map((i) => (
                <SkeletonPostCard key={i} />
              ))}
            </div>
          ) : (
            <div
              className={
                'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'
              }
            >
              {data.results.map(
                ({ title, abstract, created_date, multimedia }: IPostCard) => (
                  <PostCard
                    key={title}
                    title={title}
                    abstract={abstract}
                    created_date={created_date}
                    multimedia={multimedia}
                  />
                ),
              )}
            </div>
          )}
        </motion.div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await useGetPosts();

  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      fallback: true,
      posts: data,
    },
  };
}
