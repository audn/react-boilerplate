import React from 'react';
import { IPost } from '../lib/interfaces';
import placeholder from '../utils/helpers/placeholder';
import { slugify } from '../utils/helpers/slugify';
import toDate from '../utils/helpers/toDate';

import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: IPost['title'];
  description: IPost['description'];
  imageUrl: IPost['imageUrl'];
  date: IPost['date'];
}

function PostCard({ title, description, imageUrl, date }: Props) {
  return (
    <Link href={`/post/` + slugify({ title: title })}>
      <a className="flex flex-col overflow-hidden transform rounded-lg shadow-lg cursor-pointer group hover:-translate-y-1 animate will-change ring-2 ring-transparent hover:ring-brand-primary-100 hover:ring-opacity-40">
        <div className="flex-shrink-0 overflow-hidden max-h-48">
          <Image
            className="object-cover object-center w-full transform group-hover:scale-110 animate will-change"
            src={imageUrl}
            alt={title}
            width={200}
            height={192}
            layout={'responsive'}
            blurDataURL={placeholder()}
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col justify-between flex-1 p-6 text-left bg-card-post-100">
          <div className="flex-1">
            <div className="block mt-2">
              <p className="text-xl font-semibold text-on-card-post-900 group-hover:text-white animate">
                {title}
              </p>
              <p className="mt-3 text-base text-on-card-post-800">
                {description}
              </p>
            </div>
          </div>
          <div className="flex items-center mt-6">
            <div className="flex items-center text-sm text-on-card-post-700">
              <i className={'fas fa-calendar-week mr-3'} />{' '}
              {toDate({ dateString: date })}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default PostCard;
