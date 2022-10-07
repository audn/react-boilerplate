import { Alert } from '../../../lib/interfaces';
import { Button } from '../../Buttons';
import Bravo from '../headings/Bravo';
import P from '../headings/P';

function HydrationError({ title, label, onClick, isLoading }: Alert.Base) {
  return (
    <div className="flex flex-col items-center p-4 mx-auto rounded-md">
      <Bravo>{title ? title : 'Something went wrong..'}</Bravo>
      <P className="mb-8 text-center text-on-100">
        {label}
        <br /> Please try agian later.
      </P>
      <Button.White
        className="w-auto"
        title="Try again"
        onClick={onClick}
        isLoading={isLoading}
      />
    </div>
  );
}

export default HydrationError;
