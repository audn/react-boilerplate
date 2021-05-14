import axios from 'axios';
import { slugify } from '../helpers/slugify';

const FRONTEND = process.env.NEXT_PUBLIC_FRONTEND as string;

export const useGetPosts = async () => {
  const { data } = await axios.get(`${FRONTEND}/api/posts`);
  switch (data.status) {
    case 'OK':
      return data;
    case 'Too Many Requests':
      return 429;
  }
};

export const useGetPostsWithSlug = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { data } = await axios.get(`${FRONTEND}/api/posts/${params.slug}`);
  if (data.response.docs.length > 1) {
    switch (data.status) {
      case 'OK':
        return data;
      case 'Ratelimited':
        return 429;
    }
  }
};

export const usePrefetchAllPosts = async () => {
  const { data } = await axios.get(`${FRONTEND}/api/posts`);
  switch (data.status) {
    case 'OK':
      return data.results.map(
        (node: { title: string; headline: any }) =>
          `${slugify({ title: node.title })}`,
      );
    case 'Ratelimited':
      return 429;
  }
};
