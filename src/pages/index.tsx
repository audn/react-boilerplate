import { useState } from 'react';
import { Button } from '../common/components/Buttons';
import Buttons from '../common/components/examples/Buttons';
import DropdownExample from '../common/components/examples/Dropdown';
import Forms from '../common/components/examples/Forms';
import P from '../common/components/layout/headings/P';
import Title from '../common/components/layout/headings/Title';
import Hero from '../common/components/layout/Hero';
import TabSelector from '../common/components/layout/Tab';
import { DefaultLayout } from '../common/layouts/Default';
import { useCats } from '../common/utils/hooks/cats';
import { Hydrate } from '../common/utils/hydration';

export default function Home() {
  const {
    data,
    isLoading,
    error: fetchError,
    refetch,
    isRefetching,
  } = useCats();

  type View = 'Forms' | 'Buttons' | 'Dropdown';

  const [view, setView] = useState<View>('Forms');

  const array = [
    { label: 'Forms', icon: 'fa-solid fa-pen-field' },
    { label: 'Buttons', icon: 'fa-solid fa-tablet-button' },
    { label: 'Dropdown', icon: 'fa-solid fa-list-dropdown' },
  ];
  return (
    <DefaultLayout>
      <Hero>
        <Title>Boilerplate for building web applications with React</Title>
        <P className="max-w-2xl mt-8">
          React template with pre-made components and helpers. <br />
          All components are built using TailwindCSS.
          <p className="mt-5 font-semibold">No installations required.</p>
        </P>
        <Button.Wrapper className="mt-10">
          <Button.Secondary
            title="GitHub"
            icon="fa-brands fa-github"
            options={{ size: 'lg' }}
          />
        </Button.Wrapper>
      </Hero>
      <div className="mt-24 text-center md:text-left">
        <div className="flex justify-center gap-2">
          <TabSelector list={array} view={view} onChange={setView} />
        </div>

        {view === 'Forms' ? (
          <Forms />
        ) : view === 'Buttons' ? (
          <Buttons />
        ) : (
          <DropdownExample />
        )}
      </div>
      <div className="mt-12">
        <Hydrate.Cats
          data={data}
          error={fetchError}
          isLoading={isLoading}
          refetch={refetch}
          isRefetching={isRefetching}
        />
      </div>
    </DefaultLayout>
  );
}
