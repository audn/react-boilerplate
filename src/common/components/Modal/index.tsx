import { AnimatePresence, motion } from 'framer-motion';
import { IModal } from '../../lib/interfaces';
import { fadeIn, fadeInFromBottomAndOutBottom, scaleIn } from '../../utils/data/animations';
import { ReactNode, useEffect } from 'react';
import handleScrollbarChange from '../../utils/helpers/scrollbarModal';

interface Title {
  title: string;
  description?: ReactNode;
  icon?: ReactNode;
}

const Modal = {
  Content: ({ title, description, icon }: Title) => {
    return (
      <>
        <Icon icon={icon} />
        <h1 className={`text-white font-semibold mb-5 text-xl`}>{title}</h1>
        {description}
      </>
    );
  },
  Body: ({ children, onClose, open, className }: IModal) => {
    useEffect(() => handleScrollbarChange(open), [open]);
    return (
      <AnimatePresence>
        {open && (
          <div
            className="fixed inset-0 z-50 max-h-screen"
            aria-labelledby="modal"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed z-50 flex md:relative items-end md:items-center md:min-h-screen justify-center inset-0">
              <motion.div
                key={'modal-underlay'}
                initial="initial"
                animate="enter"
                exit="exit"
                variants={fadeIn}
                className="fixed inset-0 z-50 bg-header-100 bg-opacity-90 backdrop-filter backdrop-blur-sm"
                onClick={onClose}
              >
                &nbsp;
              </motion.div>
              <motion.div
                key={'modal-content'}
                initial="initial"
                animate="enter"
                exit="exit"
                variants={window.innerWidth > 767
                    ? scaleIn
                    : fadeInFromBottomAndOutBottom}
                className={`p-6 relative z-50`}
              >
                <div
                  className={`scrollbar-none bg-modal-100 w-full p-6 rounded-lg ring-modal-150 ring-2 ${className}`}
                >
                  <div className={'flex flex-col items-center text-center'}>
                    {children}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    );
  },
};

const Icon = ({ icon }: { icon: ReactNode }) => {
  if (icon) {
    return (
      <div
        className={
          'bg-modal-150 flex text-on-modal-icon-900 items-center justify-center text-lg' +
          ' rounded-full w-12 h-12 mb-4'
        }
      >
        {icon}
      </div>
    );
  } else return <></>;
};

export default Modal;
