import Head from 'next/head';

import { ISeoTags } from '../lib/interfaces';

const SeoTags = ({
  title = 'frontend-boilerplate | cool second title',
  desc = 'brief description',
  url = 'https://boilerplate-demo.vercel.app/',
  image = 'http://boilerplate-demo.vercel.app/img/meta.png',
}: ISeoTags) => (
  <Head>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={desc} />
    <meta property="image" content={image} />
    <meta property="og:type" content="Guide" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta property="og:image" content={image} />
    <meta property="og:image:secure_url" content={image} />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1920" />
    <meta property="og:image:height" content="1080" />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={desc} />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:site" content="@tweetaudun" />
    <meta property="twitter:image" content={image} />
    <meta property="twitter:creator" content="@tweetaudun" />
  </Head>
);

export default SeoTags;
