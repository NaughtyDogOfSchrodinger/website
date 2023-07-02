import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import {Analytics} from '@vercel/analytics/react';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {DefaultSeo} from 'next-seo';
import process from 'process';
import React, {memo, useEffect} from 'react';

import {DEFAULT_SEO_CONFIG} from '../data/seoConfig';

if (!process.env.NEXT_PUBLIC_BAIDU_ANALYTICS) {
  throw new Error('Missing Environment Variable NEXT_PUBLIC_BAIDU_ANALYTICS');
}
if (!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
    throw new Error('Missing Environment Variable NEXT_PUBLIC_GOOGLE_ANALYTICS');
}
const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const handleRouteChange = url => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const getAnalyticsTag = () => {
    return {
      __html: `<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?${process.env.NEXT_PUBLIC_BAIDU_ANALYTICS}";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
`,
    };
  };
  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={getAnalyticsTag()} />
      </Head>
      <Analytics />
      <DefaultSeo {...DEFAULT_SEO_CONFIG} />
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
