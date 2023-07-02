import classNames from 'classnames';
import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Section from '../components/Layout/Section';
import Footer from '../components/Sections/Footer';
import {homePageMeta, productMap, SectionId} from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

export async function getServerSideProps(context: never) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const id = context.query?.id || '';
  return {
    props: {
      id,
    },
  };
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Detail: FC = memo(({id}: {id: string}) => {
  const {title, description} = homePageMeta;
  const product = productMap[id];
  return (
    <Page description={description} title={title}>
      <Header />
      <Section className="bg-neutral-800" sectionId={SectionId.About}>
        <div className={classNames('grid grid-cols-1 gap-y-4')}>
          <div className={classNames('col-span-1 flex flex-col gap-y-6')}>
            <div className="flex flex-col gap-y-2">
              <h2 className="text-2xl font-bold text-white">{product.title}</h2>
              <p className="prose prose-sm text-gray-300 sm:prose-base">{product.description}</p>
            </div>
          </div>
        </div>
      </Section>
      <div className="table_image">
        <video className="w-full cursor-pointer" controls muted playsInline>
          <source src={product.videoUrl} />
        </video>
      </div>
      <Footer />
    </Page>
  );
});

export default Detail;
