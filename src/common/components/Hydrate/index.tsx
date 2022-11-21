import { Hydration } from '../../lib/interfaces';
import CatsHydration from './Cats';

export const Hydrate = {
  Cats: ({ ...props }: Hydration.Cats) => {
    return <CatsHydration {...props} />;
  },
};
