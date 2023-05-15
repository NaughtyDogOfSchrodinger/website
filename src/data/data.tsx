import {BuildingOffice2Icon, PhoneIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import icon from '../images/icon.png';
import p01 from '../images/portfolio/p-01.png';
import p02 from '../images/portfolio/p-02.png';
import p03 from '../images/portfolio/p-03.png';
import p04 from '../images/portfolio/p-04.png';
import p05 from '../images/portfolio/p-05.png';
import p06 from '../images/portfolio/p-06.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: '诺一曼科技',
  description: '让所有的企业用得起AI',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  Portfolio: 'product',
  Resume: 'resume',
  About: 'about',
  Contact: 'contact',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

export const nameMap: Record<string, string> = {
  hero: '主页',
  about: '关于我们',
  contact: '联系我们',
  product: '产品案例',
  resume: '商业模式',
  skills: 'skills',
  stats: 'stats',
  testimonials: '团队概况',
};

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `让所有的企业用得起AI`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        专注大模型<strong className="text-stone-100">AI</strong>应用，提供全球化
        <strong className="text-stone-100">AI</strong>产品，提供让企业用得起的
        <strong className="text-stone-100">AI</strong>能力，永远客户第一，保持长期主义
      </p>
    </>
  ),
  actions: [
    // {
    //   href: '/assets/resume.pdf',
    //   text: 'Resume',
    //   primary: true,
    //   Icon: ArrowDownTrayIcon,
    // },
    {
      href: `#${SectionId.Contact}`,
      text: '联系我们',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: icon,
  description: `我们是一家专注于AI应用开发的公司，拥有高学历、高素质、高质量的团队成员，具备深厚的学术背景和实战经验，长期在多个行业深耕探索。我们提供全方位的AI解决方案，包括自然语言处理、机器学习、计算机视觉等领域，并为客户提供相关的咨询、培训和维护等服务，确保客户的应用能够持续运行。我们注重团队合作、沟通协作等软技能，为客户提供更加完善的服务。`,
  aboutItems: [
    {label: '公司地址', text: '浙江省杭州市钱塘区白杨街道17号大街100号1幢367室', Icon: BuildingOffice2Icon},
    {label: '联系电话', text: '4008692092', Icon: PhoneIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: '智慧校园百事通',
    description: '智慧校园百事通',
    url: '#product',
    image: p01,
  },
  {
    title: '电商AI营销',
    description: '电商AI营销解决方案',
    url: '#product',
    image: p02,
  },
  {
    title: 'AI客服',
    description: 'AI客服解决方案',
    url: '#product',
    image: p03,
  },
  {
    title: 'AI程序员',
    description: 'AI程序员',
    url: '#product',
    image: p04,
  },
  {
    title: 'AI文员',
    description: 'AI文员',
    url: '#product',
    image: p05,
  },
  {
    title: 'AI设计',
    description: 'AI设计',
    url: '#product',
    image: p06,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p className="font-semibold">SAAS服务账号</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p className="font-semibold">按年订阅</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p className="font-semibold">提供轻量、标准、专业、旗舰四个版本</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p className="font-semibold">持续迭代</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p className="font-semibold">SAAS整体服务买断</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p className="font-semibold">原厂企业级支持</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p className="font-semibold">提供全面托管</p>,
  },
];

export const customizeMode: TimelineItem[] = [
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p className="font-semibold">按需定制</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p className="font-semibold">部署支持</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p className="font-semibold">项目+服务支持</p>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: '优秀的教育背景',
      text: '我们的团队成员毕业于北京大学、哈尔滨工业大学等知名高校，全部为985高校毕业生，具有深厚的学术背景和专业技能',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: '来自头部企业的优秀人才',
      text: '我们的团队中有来自阿里、华为等头部企业的优秀人才，具有丰富的实战经验和行业经验，为团队带来了宝贵的经验和专业知识',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: '丰富的行业经验',
      text: '我们的团队成员在电商、医疗、地产、传媒、游戏等多个行业有丰富的实战经验和专业技能，能够为客户提供全方位的AI解决方案',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    {
      name: '强大的技术实力',
      text: '我们的团队成员掌握了自然语言处理、机器学习、计算机视觉等多种AI技术，能够开发高品质的AI应用',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    {
      name: '敏捷的开发能力',
      text: '我们的团队采用敏捷开发模式，能够快速响应客户需求，并迅速适应市场变化，为客户提供高效的开发服务',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    {
      name: '完善的服务体系',
      text: '我们不仅提供AI应用开发服务，还为客户提供相关的咨询、培训和维护等服务，确保客户的应用能够持续运行',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: '联系我们',
  description: '微信公众号',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
