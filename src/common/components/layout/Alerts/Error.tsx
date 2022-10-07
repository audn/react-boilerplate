import { Broadcast } from '../../../lib/interfaces';

function Error({ title, label, onClick, isLoading }: Broadcast.Base) {
  return (
    <div className="flex flex-col items-center p-4 mx-auto rounded-md">
      error{' '}
      {/* <Bravo>{title ? title : 'Something went wrong..'}</Bravo>
      <P className="mb-8 text-center text-on-100">
        {label}
        <br /> Please try agian later.
      </P>
      <Button.White
        className="w-auto"
        title=''="Try again"
        onClick={onClick}
        isLoading={isLoading}
      /> */}
    </div>
  );
}

export default Error;
