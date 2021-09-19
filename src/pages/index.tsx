import { DefaultLayout } from '../common/layouts/Default';
import Button from '../common/components/Button';
import Layout from '../common/components/layout/Layout';

export default function Home() {
  return (
    <DefaultLayout title={'Index'}>
      <Layout.Container center>
        <div className={'pt-12 md:pt-20 text-center'}>
          <h1 className={'font-bold text-white text-3xl md:text-5xl mb-8'}>
            React, Next.js & TailwindCSS
          </h1>
          <h2 className={'text-lg text-on-naked-50'}>
            Don't waste time structuring or setting up interfaces on your next
            project!
          </h2>
        </div>
        <Button.Group className="flex mt-12 space-y-5 sm:space-y-0 sm:space-x-5">
          <Button.Primary title={`Open modal`} size="xl" className="!px-6" />
        </Button.Group>
      </Layout.Container>
    </DefaultLayout>
  );
}
