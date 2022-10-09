import { Button } from '../Buttons';
import SyntaxHighlight from '../layout/SyntaxHighlight';

function Buttons() {
  return (
    <div className="flex flex-col items-start mt-10 lg:flex-row-reverse">
      <div className="w-full p-5 rounded-lg lg:max-w-lg lg:ml-5 bg-types-100">
        <Button.Wrapper>
          <Button.Primary title="Internal link" route="/#internal-link" />
          <Button.Secondary
            title="Console log"
            icon="fa-brands fa-github"
            onClick={() => console.log('hi')}
          />
          <Button.White
            title="External link"
            icon="fa-solid fa-external-link"
            route="https://example.com#external-link"
          />
        </Button.Wrapper>
      </div>
      <div className="mt-10 lg:mt-0 w-full !text-sm">
        <SyntaxHighlight
          code={`<Button.Wrapper>
    <Button.Primary 
        title="Internal link" 
        route="/#internal-link" 
    />
    <Button.Secondary
        title="Console log"
        icon="fa-brands fa-github"
        onClick={() => console.log('hi')}
    />
    <Button.White 
        title="External link"
        icon="fa-solid fa-external-link" 
        route="https://example.com#external-link" 
    />
</Button.Wrapper>`}
        />
      </div>
    </div>
  );
}

export default Buttons;
