import Image from 'next/image';
import { IAlert } from '../lib/interfaces';

import Banner from './Banner';

const Alert = {
  Info: ({ title, message, footer, onClose, open }: IAlert) => {
    return (
      <Banner
        open={open}
        onClose={onClose && onClose}
        leftContent={
          <div className={'flex items-center'}>
            <div className={'mr-6 hidden sm:flex'}>
              <Image
                className="rounded-lg"
                src={'/img/willy-wonka.jpg'}
                alt={'Willy Wonka'}
                width={96}
                height={96}
              />
            </div>
            <div className={'flex flex-col'}>
              <h1 className={'font-bold text-white text-lg mb-3'}>{title}</h1>
              <h2>
                {message}
                {footer && <p className={'mt-4 text-blue-300'}>{footer}!</p>}
              </h2>
            </div>
          </div>
        }
      />
    );
  },
};
export default Alert;
