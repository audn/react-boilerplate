import Head from 'next/head';

import { ISeoTags } from '../lib/interfaces';

const SeoTags = ({
  title,
  defaultTitle = 'Simple boilerplate',
  desc = 'Simple, pre-setup and free-to-use front-end boilerplate including React, Next.js & TailwindCSS',
  url = 'https://align-items.center',
  image = 'https://opengraph.githubassets.com/fa53ec3abce99887a2167be84b9fb267f5d08e05d9d5779866d47922e5af1983/audn/frontend-boilerplate',
}: ISeoTags) => {
  const metaTitle = title ? title + ' | Boilerplate' : defaultTitle;
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={desc} />
      <meta property="image" content={image} />
      <meta property="og:type" content="Guide" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@tweetaudun" />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@tweetaudun" />
    </Head>
  );
};

export default SeoTags;
