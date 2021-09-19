import React from 'react';

import Layout from '../layout/Layout';

export const Footer = () => (
  <footer className="bg-footer-100 text-on-footer-100">
    <Layout.Hero size="sm">
      <Layout.Container center>
        <div className="container flex items-center justify-center text-base font-medium text-on-footer-900">
          Created by&nbsp;
          <a
            href="https://twitter.com/tweetaudun"
            target="_blank"
            className="px-3 py-2 ml-2 font-medium rounded-lg bg-types-150 hover:text-white hover:bg-types-200 animate"
          >
            <i className={'fab fa-twitter mr-2 text-blue-400'} />
            tweetaudun
          </a>
        </div>
      </Layout.Container>
    </Layout.Hero>
  </footer>
);
