import axios from 'axios';

export const useGetPosts = async () => {
  const { data } = await axios.get(
    'https://frontend-boilerplate-git-v2-audn.vercel.app/posts.json',
  );
  return data;
};
