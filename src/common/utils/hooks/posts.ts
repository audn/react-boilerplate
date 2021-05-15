import axios from 'axios';
import { slugify } from '../helpers/slugify';

const key = process.env.NEXT_PUBLIC_API_KEY as string;
const FRONTEND = process.env.NEXT_PUBLIC_FRONTEND as string;

export const useGetPosts = async () => {
  const { data } = await axios.get(
    `${FRONTEND}/topstories/v2/science.json?${key}`,
  );
  if (data.status === 'OK') {
    return data;
  } else {
    return data.status;
  }
};

export const useGetPostsWithSlug = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { data } = await axios.get(
    `${FRONTEND}/search/v2/articlesearch.json?q=${params.slug}&${key}`,
  );
  if (data.status === 'OK') {
    if (data.response.docs.length > 1) {
      return data;
    }
  } else {
    return data.status;
  }
};

export const usePrefetchAllPosts = async () => {
  try {
    const { data } = await axios.get(
      `${FRONTEND}/topstories/v2/science.json?${key}`,
    );
    return data.results.map(
      (node: { title: string; headline: any }) =>
        `${slugify({ title: node.title })}`,
    );
  } catch (error) {
    console.log(error.message);
  }
};
