import { Alert } from '../../../lib/interfaces';
import { Button } from '../../Buttons';
import H2 from '../headings/H2';
import Text from '../headings/Text';

function HydrationError({ title, label, onClick, isLoading }: Alert.Base) {
  return (
    <div className="flex flex-col items-center p-4 mx-auto rounded-md">
      <H2>{title ? title : 'Something went wrong..'}</H2>
      <Text className="mb-8 text-center text-on-100">
        {label}
        <br /> Please try agian later.
      </Text>
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
