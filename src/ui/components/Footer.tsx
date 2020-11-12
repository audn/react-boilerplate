import React from 'react';

export const Footer = () => (
  <footer className="bg-gray-900">
    <ul className="sm:flex items-center justify-between max-w-6xl mx-auto py-4 px-4 md:px-8 text-sm text-white">
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
          className="bg-gray-800 flex font-medium rounded cursor-pointer hover:bg-gray-700 transition ease-in-out duration-200 px-4 py-2 text-white items-center"
        >
          <i className="fab fa-github mr-2" /> Star on GitHub
        </a>
      </div>
    </ul>
  </footer>
);
