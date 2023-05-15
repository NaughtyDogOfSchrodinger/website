import {DefaultSeoProps} from 'next-seo';

export const SITE_DESC = '专注大模型AI应用，提供全球化AI产品，提供让企业用得起的AI能力，永远客户第一，保持长期主义';
export const DEFAULT_SEO_CONFIG: DefaultSeoProps = {
  title: '诺一曼科技NYM - 让所有的企业用得起AI',
  titleTemplate: '%s | 诺一曼科技NYM',
  defaultTitle:
    '诺一曼科技NYM - 专注大模型AI应用，提供全球化AI产品，提供让企业用得起的AI能力，永远客户第一，保持长期主义',
  description: SITE_DESC,
  openGraph: {
    images: [
      {
        url: 'https://wesite.chatdogge.top/image.png',
        alt: 'Og Image Alt',
      },
    ],
    type: 'website',
    locale: 'en_IE',
    url: 'https://wesite.chatdogge.top/',
    siteName: '诺一曼科技NYM',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon-32x32.png',
    },
  ],
};
