import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import {Analytics} from '@vercel/analytics/react';
import type {AppProps} from 'next/app';
import {DefaultSeo} from 'next-seo';
import {memo} from 'react';

import {DEFAULT_SEO_CONFIG} from '../data/seoConfig';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <Analytics />
      <DefaultSeo {...DEFAULT_SEO_CONFIG} />
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
