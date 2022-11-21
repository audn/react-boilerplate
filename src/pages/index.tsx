import { Button } from '../common/components/Buttons';
import P from '../common/components/layout/headings/P';
import Title from '../common/components/layout/headings/Title';
import Hero from '../common/components/layout/Hero';
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
          <Button.Secondary title="GitHub" icon="fa-brands fa-github" />
        </Button.Wrapper>
      </Hero>

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
