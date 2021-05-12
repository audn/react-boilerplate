import React from 'react';
import { IPostCard } from '../lib/interfaces';

import { slugify } from '../utils/helpers/slugify';
import toDate from '../utils/helpers/toDate';

import Image from 'next/image';

const domains = [
  '//ichef.bbci.co.uk',
  '//static01.nyt.com',
  '//s.yimg.com',
  '//techcrunch.com',
  '//mondrian.mashable.com',
  '//cdn.cnn.com',
  '//www.reuters.com',
  '//static.reuters.com',
  '//www.androidcentral.com',
  '//a.fsdn.com',
  '//greekreporter.com',
];
const regex = /\/\/([^\/,\s]+\.[^\/,\s]+?)(?=\/|,|\s|$|\?|#)/g;

function PostCard({ title, urlToImage, description, publishedAt }: IPostCard) {
  return (
    <>
      {domains.includes(`${urlToImage.match(regex)}`) && (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden group hover:scale-105 animate transform cursor-pointer will-change">
          <div className="flex-shrink-0 max-h-48 overflow-hidden">
            <Image
              className="object-center w-full object-cover group-hover:scale-110 transform animate will-change"
              src={urlToImage}
              alt={title}
              width={200}
              height={192}
              layout={'responsive'}
            />
          </div>
          <div className="flex-1 bg-types-75 p-6 flex flex-col justify-between">
            <div className="flex-1">
              <a
                href={`/post/` + slugify({ title: title })}
                className="block mt-2"
              >
                <p className="text-xl font-semibold text-on-hero-title group-hover:text-white animate">
                  {title}
                </p>
                <p className="mt-3 text-base text-on-hero-default">
                  {description}
                </p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex space-x-1 text-sm text-on-hero-blue">
                {toDate({ dateString: publishedAt })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PostCard;
