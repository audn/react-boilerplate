import { SyntheticEvent, useState } from 'react';
import { validateEmail } from '../../utils/helpers/regex/email';
import { Form } from '../Form';
import SyntaxHighlight from '../layout/SyntaxHighlight';

function Forms() {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [anonymous, setAnonymous] = useState<boolean>(false);

  function onSubmit(e: SyntheticEvent) {
    e.preventDefault();
  }
  return (
    <div className="flex flex-col items-start mt-10 lg:flex-row-reverse">
      <div className="w-full p-5 rounded-lg lg:max-w-lg lg:ml-5 bg-types-100">
        <Form.Layout onSubmit={onSubmit} className="space-y-5">
          <Form.Input
            id="Email"
            label="Email"
            value={email}
            onChange={setEmail}
            placeholder="your@email.com"
            regex={validateEmail}
          />
          <Form.Toggle
            id="anonymous"
            onClick={setAnonymous}
            active={anonymous}
            label="Anonymous"
          />
          <Form.Textarea
            id="message"
            label="Message"
            value={message}
            onChange={setMessage}
            placeholder="Message"
          />
        </Form.Layout>
      </div>
      <div className="mt-10 lg:mt-0 w-full !text-sm">
        <SyntaxHighlight
          code={`<Form.Layout onSubmit={onSubmit} className="space-y-5">
    <Form.Input
        id="Email"
        label="Email"
        value={email}
        onChange={setEmail}
        placeholder="your@email.com"
        regex={validateEmail}
    />
    <Form.Toggle
        id="anonymous"
        onClick={setAnonymous}
        active={anonymous}
        label="Anonymous"
    />
    <Form.Textarea
        id="message"
        label="Message"
        value={message}
        onChange={setMessage}
        placeholder="Message"
    />
</Form.Layout>`}
        />
      </div>
    </div>
  );
}

export default Forms;
