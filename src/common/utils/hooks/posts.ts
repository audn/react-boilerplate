import axios from 'axios';
import { slugify } from '../helpers/slugify';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const useGetPosts = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}topstories/v2/science.json?${API_KEY}`,
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
export const useGetPostsWithSlug = async ({
  params,
}: {
  params: { slug: string };
}) => {
  try {
    const { data } = await axios.get(
      `${API_URL}search/v2/articlesearch.json?q=${params.slug}&${API_KEY}`,
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const usePrefetchAllPosts = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}topstories/v2/science.json?${API_KEY}`,
    );
    return data.results.map(
      (node: { title: string; headline: any }) =>
        `${slugify({ title: node.title })}`,
    );
  } catch (error) {
    console.log(error.message);
  }
};
