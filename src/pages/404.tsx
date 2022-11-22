import { NextSeo } from 'next-seo';
import { DefaultLayout } from '../common/layouts/Default';

export default function Custom404() {
  return (
    <DefaultLayout>
      <NextSeo title="Page not found" />
      error
    </DefaultLayout>
  );
}
