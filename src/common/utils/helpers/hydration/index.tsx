import SkeletonPostCard from '../../../components/SkeletonPostCard';
import PostCard from '../../../components/PostCard';
import Alert from '../../../components/Alert';

import { IPostCard } from '../../../lib/interfaces';

function HydratePosts(data: any, loading: boolean) {
  const fakeArray: Array<number> = [1, 2, 3, 4, 5, 6, 7];
  if (data === 429) {
    return <Alert.Ratelimited />;
  }
  switch (loading) {
    case true:
      return (
        <div
          className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'}
        >
          {fakeArray.map((i) => (
            <SkeletonPostCard key={i} />
          ))}
        </div>
      );
    case false:
      return (
        <div
          className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'}
        >
          {data.results.map(
            ({ title, abstract, created_date, multimedia }: IPostCard) => (
              <PostCard
                key={title}
                title={title}
                abstract={abstract}
                created_date={created_date}
                multimedia={multimedia}
              />
            ),
          )}
        </div>
      );
  }
}

export { HydratePosts };
