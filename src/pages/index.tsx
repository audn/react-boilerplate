import { useQuery } from 'react-query';

import { Layout } from '../common/layouts/Layout';
import Container from '../common/components/Container';
import PostCard from '../common/components/PostCard';
import Button from '../common/components/Button';
import SkeletonPostCard from '../common/components/SkeletonPostCard';

import { motion } from 'framer-motion';
import { fadeIn } from '../common/utils/data/animations';

import { useGetPosts } from '../common/utils/hooks/posts';
import { IPostCard } from '../common/lib/interfaces';
import { useRouter } from 'next/router';

const getMovies = async () => {
  return useGetPosts();
};
const fakeArray = [1, 2, 3, 4, 5, 6, 7];

export default function Home({ movies }: { movies: any }) {
  const router = useRouter();

  const { data } = useQuery('movies', getMovies, {
    initialData: movies,
  });

  return (
    <Layout title={'Index'} desc={'description'}>
      <Container>
        <motion.div
          className="w-full text-on-hero-default"
          initial="initial"
          animate="enter"
          variants={fadeIn}
        >
          <div className={'py-12'}>
            <h1 className={'font-bold text-white text-2xl mb-3'}>
              React, Next.js & TailwindCSS
            </h1>
            <h2 className={'font-medium'}>Have a look around! </h2>
            <Button.Group className="flex gap-5 mt-6 space-y-4 sm:space-y-0 ">
              <Button.Primary
                title={`Forms`}
                className={'hover:scale-105 transform'}
                route="/forms"
                icon={<i className={'fas fa-eye mr-3'} />}
                size={'md'}
              />
              <Button.Secondary
                title={`Disable`}
                onClick={() => console.log('custom onclick')}
                className={'hover:scale-105 transform'}
                icon={<i className={'fas fa-eye mr-3'} />}
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
              {data.articles.map(
                ({
                  title,
                  description,
                  urlToImage,
                  publishedAt,
                }: IPostCard) => (
                  <PostCard
                    key={title}
                    title={title}
                    description={description}
                    urlToImage={urlToImage}
                    publishedAt={publishedAt}
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

  return {
    props: {
      fallback: true,
      movies: data,
    },
  };
}
