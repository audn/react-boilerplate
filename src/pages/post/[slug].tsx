import { Layout } from '../../common/layouts/Layout';
import { useRouter } from 'next/router';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import Container from '../../common/components/Container';
import Banner from '../../common/components/Banner';
import PostBody from './components/PostBody';

import {
  useGetPostsWithSlug,
  usePrefetchAllPosts,
} from '../../common/utils/hooks/posts';
import { motion } from 'framer-motion';
import { fadeIn } from '../../common/utils/data/animations';

export default function Post({ post }: { post: any }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout title={'Loading post'}>
        <Container>
          <SkeletonTheme color="#1b2c48" highlightColor="#192942">
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
          </SkeletonTheme>
        </Container>
      </Layout>
    );
  }

  const title = post.response.docs[0].headline.main;
  const paragraph = post.response.docs[0].lead_paragraph;
  const source = post.response.docs[0].source;
  const image =
    'https://www.nytimes.com/' + post.response.docs[0].multimedia[2].url;
  console.log(post.response.docs[0].multimedia);
  return (
    <Layout
      title={title + 'Loading..' + ' | Boilerplate'}
      desc={paragraph}
      image={image}
    >
      <Container>
        <motion.div
          className="w-full"
          initial="initial"
          animate="enter"
          variants={fadeIn}
        >
          <div className={'py-12 text-center'}>
            {post === 429 ? (
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
                        We actually show a couple of blog posts here, but it
                        seems like we were ratelimited by the API.
                        <p className={'mt-4 text-blue-300'}>
                          Try refreshing and you'll see them eventually!{' '}
                        </p>
                      </h2>
                    </div>
                  </div>
                }
              />
            ) : (
              <PostBody
                source={source}
                title={title}
                paragraph={paragraph}
                image={image}
              />
            )}
          </div>
        </motion.div>
      </Container>
    </Layout>
  );
}
export async function getStaticProps(params: { params: { slug: string } }) {
  const data = await useGetPostsWithSlug(params);
  console.log('call', data);
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await usePrefetchAllPosts();
  let newPaths = [];
  for (let object of Object.keys(allPosts || {})) {
    let slug = allPosts[object];
    newPaths.push({ params: { slug: slug } });
  }
  return {
    paths: newPaths || [],
    fallback: true,
  };
}
