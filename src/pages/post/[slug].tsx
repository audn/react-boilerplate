import { useRouter } from 'next/router';
import { Layout } from '../../common/layouts/Layout';

import Container from '../../common/components/Container';
import SectionSeparator from '../../common/components/SectionSeparator';

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
  const title = props.response.docs[0].headline.main;
  const source = props.response.docs[0].source;
  const abstract = props.response.docs[0].lead_paragraph;

  return (
    <Layout title={title + ' | Boilerplate'} desc={'Post description'}>
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
            <SectionSeparator />
          </div>
        </motion.div>
      </Container>
    </Layout>
  );
}
export async function getStaticProps({
  ...params
}: {
  params: string;
  slug: string;
}) {
  const data = await useGetPostsWithSlug({ params });

  return {
    props: {
      props: data,
    },
  };
}

export async function getStaticPaths({
  ...params
}: {
  params: string;
  slug: string;
}) {
  const allPosts = await usePrefetchAllPosts({ params });
  let newPaths = [];

  console.log(allPosts);

  for (let slug of allPosts) {
    newPaths.push({ params: { slug: slug } });
  }
  console.log(newPaths);
  return {
    paths: newPaths || [],
    fallback: true,
  };
}
