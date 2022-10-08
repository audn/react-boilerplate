import { NextSeoProps } from 'next-seo';

export default {
  title: 'react-boilerplate',
  description: 'react-boilerplate',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.align-items.center',
    site_name: 'react-boilerplate',
    images: [
      {
        url: 'https://opengraph.githubassets.com/fa53ec3abce99887a2167be84b9fb267f5d08e05d9d5779866d47922e5af1983/audn/frontend-boilerplate',
        width: 400,
        height: 400,
        alt: '',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@tweetaudun',
    site: '@tweetaudun',
    cardType: 'summary',
  },
} as NextSeoProps;
