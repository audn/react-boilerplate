import { AnimatePresence } from 'framer-motion';
import { SkeletonTheme } from 'react-loading-skeleton';
import Error from '../../../components/layout/Alerts/Error';
import Animate from '../../../components/layout/Animate';
import { Hydration } from '../../../lib/interfaces';
import { fadeIn } from '../../data/animations';
import SkeletonIdeaCard from './components/Skeleton';

function CatsHydration({
  data,
  error,
  isLoading,
  refetch,
  isRefetching,
}: Hydration.Cats) {
  if (isLoading) {
    return (
      <SkeletonTheme baseColor="#272e39" highlightColor="#38414f">
        <div className="grid grid-cols-1 gap-5">
          {[
            ...Array.from(Array(20)).map((_, i) => (
              <SkeletonIdeaCard key={`skeleton_${i}`} />
            )),
          ]}
        </div>
      </SkeletonTheme>
    );
  } else if (error) {
    return (
      <Error
        title="Couldn't get data"
        label={`An error occoured while trying to retrieve ideas.`}
        onClick={refetch}
        isLoading={isRefetching}
      />
    );
  } else
    return (
      <AnimatePresence initial={false}>
        <Animate variants={fadeIn} className="grid grid-cols-1 gap-5">
          {data?.map((cat) => (
            <>{cat.id}</>
          ))}
        </Animate>
      </AnimatePresence>
    );
}

export default CatsHydration;
