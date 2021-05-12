import axios from 'axios';
import { slugify } from '../helpers/slugify';

const API_URL =
  'https://newsapi.org/v2/everything?q=Apple&from=2021-05-12&sortBy=popularity&apiKey=ca2c060bda124c2f8fe12627f62c7437';

export const useGetPosts = async () => {
  try {
    const { data } = await axios.get(API_URL);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
export const useGetPostsWithSlug = async ({ ...params }: { params: any }) => {
  try {
    console.log(params);
    const { data } = await axios.get(
      `https://newsapi.org/v2/everything?q=EY&sortBy=popularity&apiKey=ca2c060bda124c2f8fe12627f62c7437`,
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const usePrefetchAllPosts = async () => {
  try {
    const { data } = await axios.get(API_URL);
    return data.articles.map(
      (node: { title: string; node: string[] }) =>
        `/posts/${slugify({ title: node.title })}`,
    );
  } catch (error) {
    console.log(error.message);
  }
};
