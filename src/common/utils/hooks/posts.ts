import axios from 'axios';
import { slugify } from '../helpers/slugify';

const NEXT_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_API_KEY as string;
// const FRONTEND = process.env.NEXT_PUBLIC_FRONTEND as string;

export const useGetPosts = async () => {
  const { data } = await axios.get(
    `https://api.nytimes.com/svc/topstories/v2/science.json?${NEXT_PUBLIC_API_KEY}`,
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
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.slug}&${NEXT_PUBLIC_API_KEY}`,
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
      `${process.env.NEXT_PUBLIC_FRONTEND}/topstories/v2/science.json?${NEXT_PUBLIC_API_KEY}`,
    );
    return data.results.map(
      (node: { title: string; headline: any }) =>
        `${slugify({ title: node.title })}`,
    );
  } catch (error) {
    console.log(error.message);
  }
};
