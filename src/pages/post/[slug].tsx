import { useRouter } from 'next/router';

import { Layout } from '../../common/layouts/Layout';
import Container from '../../common/components/Container';
import SectionSeparator from '../../common/components/SectionSeparator';

import {
  useGetPostsWithSlug,
  usePrefetchAllPosts,
} from '../../common/utils/hooks/posts';

export default function Post({
  props,
  totalResults,
}: {
  props: any;
  totalResults: number;
}) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <>
        <Layout title={'loading | Boilerplate'} desc={'Post description'}>
          <Container>loading</Container>
        </Layout>
      </>
    );
  }

  return (
    <Layout title={totalResults + ' | Boilerplate'} desc={'Post description'}>
      <Container>
        <>
          {JSON.stringify(props)}
          <SectionSeparator />
        </>
      </Container>
    </Layout>
  );
}
export async function getStaticProps({ params }: { params: any }) {
  const data = await useGetPostsWithSlug(params);

  return {
    props: {
      totalResults: data.totalResults,
      props: data,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await usePrefetchAllPosts();
  let newPaths = [];

  for (let slug of allPosts) {
    newPaths.push({ params: { slug: slug } });
  }
  return {
    paths: newPaths || [],
  };
}
