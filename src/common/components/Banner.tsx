import React from 'react';
import { IBanner } from '../lib/interfaces';

import { fadeOutTop } from '../utils/data/animations';
import { motion } from 'framer-motion';

function Banner({
  position,
  leftContent,
  rightContent,
  onClose,
  icon,
}: IBanner) {
  if (position === 'bottom') {
    return FixedBanner();
  } else return DefaultBanner({ leftContent, rightContent, onClose, icon });
}
function DefaultBanner({ leftContent, rightContent, onClose, icon }: IBanner) {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={fadeOutTop}
    >
      <div
        className={
          'ring-2 ring-brand-primary hover:ring-opacity-80 ring-opacity-50 hover:bg-opacity-50 animate mb-12' +
          ' bg-brand-primary bg-opacity-20 px-4 py-4 rounded-lg sm:flex items-center justify-between text-white'
        }
      >
        <div className={'flex items-center'}>
          {icon && (
            <div
              className={
                'flex-shrink-0 bg-brand-primary h-8 w-8 flex items-center justify-center bg-opacity-20 mr-3 rounded-md'
              }
            >
              {icon}
            </div>
          )}
          {leftContent}
        </div>
        <div className={'sm:flex items-center'}>
          {rightContent && rightContent}
          {onClose && (
            <div className={'flex'}>
              <div
                className={
                  'hidden sm:flex ml-6 items-center justify-center w-8 h-8 rounded-md bg-brand-primary-light' +
                  ' hover:bg-opacity-100' +
                  ' cursor-pointer animate bg-opacity-20'
                }
                onClick={() => onClose()}
              >
                <i className={'fas fa-times'} />
              </div>
              <div
                className={
                  'flex sm:hidden px-3 py-2 w-full bg-brand-primary ring-2 ring-brand-primary' +
                  ' ring-opacity-80 bg-opacity-50' +
                  '  mt-6 rounded-md justify-center cursor-pointer hover:bg-brand-primary-dark animate'
                }
                onClick={() => onClose()}
              >
                Close
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function FixedBanner() {
  return <div> fixed</div>;
}
export default Banner;
