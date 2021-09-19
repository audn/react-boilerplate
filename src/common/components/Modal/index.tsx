import { IBaseComponent, IModal } from '../../lib/interfaces';
import {
  fadeIn,
  fadeInFromBottomAndOutBottom,
  scaleIn,
} from '../../utils/data/animations';
import { useEffect } from 'react';
import handleScrollbarChange from '../../utils/helpers/scrollbarModal';
import Animate from '../layout/Animate';
import concat from '../../utils/helpers/concat';

function Base({ children, onClose }: IBaseComponent & { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 max-h-screen"
      aria-labelledby="modal"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 z-50 flex items-end justify-center md:relative md:items-center md:min-h-screen">
        <Animate
          variants={fadeIn}
          onClick={() => onClose()}
          className="fixed inset-0 z-50 select-none bg-types-50 bg-opacity-90 "
        >
          &nbsp;
        </Animate>

        <Animate
          variants={
            window.innerWidth > 767 ? scaleIn : fadeInFromBottomAndOutBottom
          }
          className={`w-full max-w-lg relative z-50 xs:pt-6 `}
        >
          {children}
        </Animate>
      </div>
    </div>
  );
}
const Modal = {
  Title: ({
    children,
    goBack,
    onClose,
  }: IBaseComponent & { goBack?: () => void; onClose: () => void }) => {
    return (
      <div className="w-[-webkit-fill-available] px-4 py-3 -mx-4 -mt-4 border-b-2 bg-types-150 border-types-200 relative">
        <div className="grid items-center grid-cols-3">
          <div className="w-9 h-9">
            {goBack && (
              <div
                className="flex items-center justify-center w-10 h-10 text-[#8a8b8e] rounded-full cursor-pointer sm:w-8 sm:h-8 50 hover:text-white animate bg-types-200 "
                onClick={() => goBack()}
              >
                <i className="text-2xl sm:text-lg fas fa-angle-left" />
              </div>
            )}
          </div>
          <h2 className="text-lg font-semibold text-center text-white">
            {children}
          </h2>
          <div className="justify-end hidden xs:flex ">
            <div
              className="flex items-center justify-center w-9 h-9 text-[#8a8b8e] rounded-full cursor-pointer 50 hover:text-white animate bg-types-200"
              onClick={onClose}
            >
              <i className="text-lg fas fa-times" />
            </div>
          </div>
        </div>
      </div>
    );
  },
  Footer: ({ children }: IBaseComponent) => {
    return (
      <div className="w-[-webkit-fill-available] px-4 pt-5 xs:pt-3 py-3 -mx-4 -mb-4 border-t-2 bg-types-75 border-types-200 relative">
        <div className="flex absolute top-0 w-full left-0 mt-[-1.6rem] bg-gradient-to-t from-types-150 ">
          &nbsp;
        </div>
        {children}
      </div>
    );
  },
  Body: ({ children }: IBaseComponent) => {
    return (
      <div
        className={
          'pt-3 pb-6 flex flex-col items-start w-full max-h-[500px] overflow-y-auto scrollbar-none'
        }
      >
        {children}
      </div>
    );
  },
  Default: ({ children, onClose, open, className }: IModal) => {
    useEffect(() => {
      handleScrollbarChange(open);
      return () => handleScrollbarChange(false);
    }, [open]);

    return (
      <Base onClose={onClose}>
        <div
          className={concat(
            className && className,
            'scrollbar-none bg-types-150 border-b-0 xs:border-b-2 border-l-0 xs:border-l-2  border-r-0 xs:border-r-2 border-types-200 rounded-t-2xl border-2 xs:rounded-t-lg md:rounded-lg overflow-hidden',
          )}
        >
          <div
            className={
              'flex flex-col items-start w-full p-4 text-on-modal-100  '
            }
          >
            {children}
          </div>
        </div>
      </Base>
    );
  },
};

export default Modal;
