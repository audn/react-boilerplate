import React from 'react';

import Hero from '../Hero';
import Button from '../Button';

export const Footer = () => (
  <div className={'mt-12'}>
    <Hero>
      <h1 className={'font-bold text-white text-2xl mb-8'}>
        Ready to try it out?
      </h1>
      <Button.Primary
        title={`Check out on Github`}
        route="https://github.com/audn/frontend-boilerplate"
        icon={<i className={'fab fa-github mr-3'} />}
        className={'!py-3 !px-16 hover:scale-105 transform'}
      />
    </Hero>
    <footer className="bg-footer-25">
      <ul className="sm:flex items-center justify-between container py-8 px-4 md:px-8 text-sm text-white">
        <div className="flex-1">
          <li>
            Created by{' '}
            <a
              href="https://twitter.com/tweetaudun"
              target="_blank"
              className="font-bold"
            >
              tweetaudun
            </a>
          </li>
        </div>
        <div className="flex-initial mt-3 sm:mt-0">
          <a
            href="https://github.com/audn/frontend-boilerplate"
            target="_blank"
            className="bg-button-footer-25 hover:bg-button-footer-50 text-button-footer-text hover:text-white flex font-medium rounded cursor-pointer transition ease-in-out duration-200 px-4 py-2 text-white items-center"
          >
            <i className="fab fa-github mr-2" /> Star on GitHub
          </a>
        </div>
      </ul>
    </footer>
  </div>
);
