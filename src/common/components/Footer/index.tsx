import React from 'react';

import Hero from '../Hero';
import Button from '../Button';
import Container from '../Container';

export const Footer = () => (
  <div className={'mt-12'}>
    <Hero>
      <Container alignContent={'center'}>
        <h1 className={'font-bold text-white text-2xl mb-8'}>
          Ready to try it out?
        </h1>
        <Button.Group>
          <Button.Primary
            title={`Check out on Github`}
            route="https://github.com/audn/frontend-boilerplate"
            icon={<i className={'fab fa-github mr-3'} />}
            className={'!py-3 !px-16 desktop-transform'}
          />
        </Button.Group>
      </Container>
    </Hero>
    <footer className="bg-footer-25">
      <div className="flex items-center font-medium justify-center container py-8 px-4 md:px-8 text-base text-on-footer-900">
        Created by&nbsp;
        <a
          href="https://twitter.com/tweetaudun"
          target="_blank"
          className="font-medium hover:bg-lightpill-150 hover:text-on-lightpill-900 bg-lightpill-100 rounded-lg px-3 py-2 animate text-on-lightpill-800"
        >
          <i className={'fab fa-twitter mr-2 text-blue-400'} />
          tweetaudun
        </a>
      </div>
    </footer>
  </div>
);
