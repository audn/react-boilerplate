import Skeleton from 'react-loading-skeleton';

function SkeletonIdeaCard() {
  return (
    <div className="relative text-on-150">
      <div className="flex items-center w-full">
        <div className="flex w-full">
          <div className="flex w-full px-3 py-2 sm:px-4 sm:py-3 sm:ml-3 rounded-xl bg-types-100 border-types-100 group hover:bg-types-150 animate">
            <div className="flex flex-col justify-between w-full ">
              <div className="flex gap-x-1 sm:gap-x-2 items-center text-[13px] sm:text-[15px]">
                <Skeleton circle={true} width={28} height={28} />
                <span className="hidden text-sm sm:flex gap-x-2">
                  <Skeleton width={25} /> <Skeleton width={100} />
                </span>
              </div>
              <div className="flex items-center mt-2">
                <Skeleton width={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonIdeaCard;
