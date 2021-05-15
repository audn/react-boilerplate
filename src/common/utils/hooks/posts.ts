import axios from 'axios';
import { slugify } from '../helpers/slugify';

// const FRONTEND = process.env.NEXT_PUBLIC_FRONTEND as string;
const key = process.env.NEXT_PUBLIC_API_KEY as string;

export const useGetPosts = async () => {
  const { data } = await axios.get(
    `https://api.nytimes.com/svc/topstories/v2/science.json?${key}`,
  );
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
  const { data } = await axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.slug}&${key}`,
  );
  if (data.response.docs.length > 1) {
    switch (data.status) {
      case 'OK':
        return data;
      case 'Too Many Requests':
        return 429;
    }
  }
};

export const usePrefetchAllPosts = async () => {
  try {
    const { data } = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=the-moon-mars-and-beyond-chinas-ambitious-plans-in-space&${key}`,
    );
    return data.results.map(
      (node: { title: string; headline: any }) =>
        `${slugify({ title: node.title })}`,
    );
  } catch (error) {
    console.log(error.message);
  }
};
