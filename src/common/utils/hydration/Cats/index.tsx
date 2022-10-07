import { AnimatePresence } from 'framer-motion';
import { SkeletonTheme } from 'react-loading-skeleton';
import Error from '../../../components/layout/Alerts/Error';
import Animate from '../../../components/layout/Animate';
import { Hydration } from '../../../lib/interfaces';
import { fadeIn } from '../../data/animations';

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
        <div className="grid grid-cols-1 gap-5">loading cats...</div>
      </SkeletonTheme>
    );
  } else if (error) {
    return (
      <Error
        title="Couldn't get data"
        label={`An error occoured while trying to retrieve cats.`}
        onClick={refetch}
        isLoading={isRefetching}
      />
    );
  } else
    return (
      <AnimatePresence initial={false}>
        <Animate variants={fadeIn} className="flex flex-wrap gap-5">
          {data?.map((cat) => (
            <img
              key={cat.id}
              src={`https://cataas.com/cat/${cat.id}`}
              className="w-auto h-full"
            />
          ))}
        </Animate>
      </AnimatePresence>
    );
}

export default CatsHydration;
