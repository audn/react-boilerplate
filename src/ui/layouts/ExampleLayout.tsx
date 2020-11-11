import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const ExampleLayout = (props: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen bg-gray-200">
    <Header />
    <div className="bg-indigo-400">
      <div className="flex flex-wrap md:flex-no-wrap items-center justify-between max-w-6xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center">
          <div className="text-white text-lg font-medium">
            This page is using a different layout!
          </div>
        </div>
      </div>
    </div>
    <main className="flex-1 w-full max-w-6xl p-4 mx-auto md:px-8 md:py-16">
      {props.children}
    </main>
    <Footer />
  </div>
);
