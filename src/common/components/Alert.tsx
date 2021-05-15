import Banner from './Banner';
import Image from 'next/image';

const Alert = {
  Ratelimited: () => {
    return (
      <Banner
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
              <h1 className={'font-bold text-white text-lg mb-3'}>
                Ratelimited!
              </h1>
              <h2>
                We would show you some content, but it seems like we were
                ratelimited by the API.
                <p className={'mt-4 text-blue-300'}>
                  Try refreshing and you'll get it eventually!{' '}
                </p>
              </h2>
            </div>
          </div>
        }
      />
    );
  },
};
export default Alert;
