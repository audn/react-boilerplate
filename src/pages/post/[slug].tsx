import { Layout } from '../../common/layouts/Layout';
import { useRouter } from 'next/router';

import Container from '../../common/components/Container';
import PostBody from './components/PostBody';
import Ratelimited from './screens/Ratelimited';
import Loading from './screens/Loading';

import {
  useGetPostsWithSlug,
  usePrefetchAllPosts,
} from '../../common/utils/hooks/posts';
import { motion } from 'framer-motion';
import { fadeIn } from '../../common/utils/data/animations';

export default function Post({ post }: { post: any }) {
  const router = useRouter();
  const loading = router.isFallback;

  if (post === 429) {
    return <Ratelimited />;
  }

  if (loading) {
    return <Loading />;
  }

  const title = post.response.docs[0].headline.main;
  const paragraph = post.response.docs[0].lead_paragraph;
  const source = post.response.docs[0].source;
  const image =
    'https://www.nytimes.com/' + post.response.docs[0].multimedia[2].url;
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
            <PostBody
              source={source}
              title={title}
              paragraph={paragraph}
              image={image}
            />
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
      post: data || 429,
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
