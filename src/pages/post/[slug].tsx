import { useRouter } from 'next/router';
import { Layout } from '../../common/layouts/Layout';

import Container from '../../common/components/Container';

import {
  useGetPostsWithSlug,
  usePrefetchAllPosts,
} from '../../common/utils/hooks/posts';
import { motion } from 'framer-motion';
import { fadeIn } from '../../common/utils/data/animations';

export default function Post({ props }: { props: any }) {
  const router = useRouter();
  if (router.isFallback) {
    return <Layout title={'Loading post | Boilerplate'}>loading...</Layout>;
  }
  if (props.response.docs.length === 0) {
    return (
      <Layout title={'Oops | Boilerplate'}>
        <Container>
          <motion.div
            className="w-full"
            initial="initial"
            animate="enter"
            variants={fadeIn}
          >
            <div className={'py-12 text-center'}>
              <h1 className={'font-bold text-white text-3xl mb-6'}>
                Couldn't find the post..
              </h1>
            </div>
          </motion.div>
        </Container>
      </Layout>
    );
  }

  console.log(props);
  const title = props.response.docs[0].headline.main;
  const source = props.response.docs[0].source;
  const abstract = props.response.docs[0].lead_paragraph;
  return (
    <Layout title={' | Boilerplate'} desc={'Post description'}>
      <Container>
        <motion.div
          className="w-full"
          initial="initial"
          animate="enter"
          variants={fadeIn}
        >
          <div className={'py-12 text-center'}>
            <h4 className={'font-medium text-brand-primary-light text-sm mb-6'}>
              {source ? source : ''}
            </h4>
            <h1 className={'font-bold text-white text-3xl mb-6'}>{title}</h1>
            <div className={'max-w-2xl mx-auto'}>
              <h2 className={'text-on-naked-default text-base mt-12'}>
                {abstract}
              </h2>
            </div>
          </div>
        </motion.div>
      </Container>
    </Layout>
  );
}
export async function getStaticProps(params: { params: { slug: string } }) {
  const data = await useGetPostsWithSlug(params);

  return {
    props: {
      props: data,
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
    paths: newPaths,
    fallback: true,
  };
}
