import { NextSeo } from 'next-seo';
import { Button } from '../common/components/Buttons';
import { Hydrate } from '../common/components/Hydrate';
import H1 from '../common/components/layout/headings/H1';
import Text from '../common/components/layout/headings/Text';
import { DefaultLayout } from '../common/layouts/Default';
import { useCats } from '../common/utils/hooks/cats';

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
      <NextSeo />
      <div className="flex flex-col items-center justify-center mx-auto mt-12 text-center md:mt-0 md:py-24 rounded-2xl md:bg-types-d100">
        <H1 className="text-3xl md:text-6xl md:!leading-[5rem] text-transparent max-w-4xl bg-gradient-to-br from-brand-primary-100 to-brand-primary-150 bg-clip-text">
          Boilerplate for building web applications with React
        </H1>
        <Text className="max-w-2xl mt-8">
          <p>
            React template with pre-made components and helpers. <br />
            All components are built using TailwindCSS.
          </p>
          <p className="mt-5 font-semibold">No installations required.</p>
        </Text>
        <Button.Wrapper className="mt-10">
          <Button.Secondary title="GitHub" icon="fa-brands fa-github" />
        </Button.Wrapper>
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
