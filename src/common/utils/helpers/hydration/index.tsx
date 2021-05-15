import PostCard from '../../../components/PostCard';

import { IPost } from '../../../lib/interfaces';

function HydratePosts(posts: IPost[]) {
  return (
    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'}>
      {posts.map(({ title, description, imageUrl, date }: IPost) => (
        <PostCard
          key={title}
          title={title}
          description={description}
          imageUrl={imageUrl}
          date={date}
        />
      ))}
    </div>
  );
}

export { HydratePosts };
