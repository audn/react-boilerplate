import { Layout } from '../../common/layouts/Layout';
import { useRouter } from 'next/router';

import Container from '../../common/components/Container';
import Banner from '../../common/components/Banner';

import {
  useGetPostsWithSlug,
  usePrefetchAllPosts,
} from '../../common/utils/hooks/posts';

import { motion } from 'framer-motion';
import { fadeIn } from '../../common/utils/data/animations';
// import { useQuery } from 'react-query';

// const getPost = async (params: { params: { slug: string } }) => {
//   return useGetPostsWithSlug(params);
// };

export default function Post({ post }: { post: any }) {
  const router = useRouter();
  const loading = router.isFallback;

  // const { data } = useQuery('post', getPost, {
  //   initialData: post,
  // });
  return (
    <Layout
      title={
        post ? post.response.docs[0].headline.main : 'Title' + ' | Boilerplate'
      }
      desc={'Post description'}
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
            ) : loading ? (
              'Loading'
            ) : (
              <>
                <h4
                  className={
                    'font-medium text-brand-primary-light text-sm mb-6'
                  }
                >
                  {post.response.docs[0].source
                    ? post.response.docs[0].source
                    : ''}
                </h4>
                <h1 className={'font-bold text-white text-3xl mb-6'}>
                  {post.response.docs[0].headline.main}
                </h1>
                <div className={'max-w-2xl mx-auto'}>
                  <h2 className={'text-on-naked-default text-base mt-12'}>
                    {post.response.docs[0].lead_paragraph}
                  </h2>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </Container>
    </Layout>
  );
}
export async function getStaticProps(params: { params: { slug: string } }) {
  const data = await useGetPostsWithSlug(params);

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
