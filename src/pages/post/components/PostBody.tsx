import React from 'react';

import Image from 'next/image';

function PostBody({
  title,
  paragraph,
  source,
  image,
}: {
  title: string;
  paragraph: string;
  source: string;
  image: string;
}) {
  return (
    <>
      <h4 className={'font-medium text-brand-primary-light text-sm mb-6'}>
        {source}
      </h4>
      <h1 className={'font-bold text-white text-3xl mb-6'}>{title}</h1>
      <div className={'max-w-2xl mx-auto'}>
        <h2 className={'text-on-naked-default text-base mt-12'}>{paragraph}</h2>
      </div>
      <div className={'w-1/2 h-auto mx-auto mt-12'}>
        <Image src={image} alt={title} width={480} height={320} />
      </div>
    </>
  );
}

export default PostBody;
