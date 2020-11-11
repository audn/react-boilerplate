import React, { memo } from 'react';
import twemoji from 'twemoji';

export const Twemoji = memo(({ emoji }: { emoji: string }) => (
  <span
    dangerouslySetInnerHTML={{
      __html: twemoji.parse(emoji, {
        folder: 'svg',
        ext: '.svg',
      }),
    }}
  />
));
