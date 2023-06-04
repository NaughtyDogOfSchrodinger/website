import {ChevronUpIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, {FC, memo} from 'react';

import {SectionId} from '../../data/data';

const Footer: FC = memo(() => (
  <div className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <a
        className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
        href={`/#${SectionId.Hero}`}>
        <ChevronUpIcon className="h-6 w-6 bg-transparent sm:h-8 sm:w-8" />
      </a>
    </div>
    <div className="flex flex-col items-center gap-y-6">
      {/*<div className="flex gap-x-4 text-neutral-500">*/}
      {/*  <Socials />*/}
      {/*</div>*/}
      <Link
        className="text-sm hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100"
        href="http://beian.miit.gov.cn/">
        浙ICP备2023014192号
      </Link>
      <span className="text-sm text-neutral-700">© Copyright 2023 fengnuoyiman</span>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
