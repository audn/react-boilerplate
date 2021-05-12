import { useRouter } from 'next/router';

import { Layout } from '../../common/layouts/Layout';
import Container from '../../common/components/Container';
import SectionSeparator from '../../common/components/SectionSeparator';

import { IPost } from '../../common/lib/interfaces';
import {
  useGetPostsWithSlug,
  usePrefetchAllPosts,
} from '../../common/utils/hooks/posts';

export default function Post(props: IPost) {
  const router = useRouter();
  return (
    <Layout title={' | Boilerplate'} desc={'Post description'}>
      <Container>
        {router.isFallback ? (
          <>Loading…</>
        ) : (
          <>
            <article>{JSON.stringify(props)}</article>
            <SectionSeparator />
          </>
        )}
      </Container>
    </Layout>
  );
}
export async function getStaticProps({ params }: { params: any }) {
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

  for (let slug of allPosts) {
    newPaths.push({ params: { slug: slug } });
  }
  return {
    paths: newPaths || [],
    fallback: true,
  };
}
