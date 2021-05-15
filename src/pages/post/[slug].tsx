import { Layout } from '../../common/layouts/Layout';
import { useRouter } from 'next/router';

import Container from '../../common/components/Container';
import Loading from './screens/Loading';

import { motion } from 'framer-motion';
import { fadeIn } from '../../common/utils/data/animations';

export default function Post() {
  const router = useRouter();
  const loading = router.isFallback;

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout title={'Post | Boilerplate'}>
      <Container>
        <motion.div
          className="w-full"
          initial="initial"
          animate="enter"
          variants={fadeIn}
        >
          <div className={'py-12 text-center'}>Content here</div>
        </motion.div>
      </Container>
    </Layout>
  );
}
// export async function getStaticProps(params: { params: { slug: string } }) {
//   const data = await useGetPostsWithSlug(params);
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: {
//       post: data,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const allPosts = await usePrefetchAllPosts();
//   return {
//     paths: allPosts,
//     fallback: true,
//   };
// }
