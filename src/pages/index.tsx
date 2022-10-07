import { SyntheticEvent, useState } from 'react';
import { Button } from '../common/components/Buttons';
import { Form } from '../common/components/Form';
import { DefaultLayout } from '../common/layouts/Default';
import { validateEmail } from '../common/utils/helpers/regex/email';

export default function Home() {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [enabled, setEnabled] = useState<boolean>(false);

  function onSubmit(e: SyntheticEvent) {
    e.preventDefault();
    console.log('ay');
  }
  return (
    <DefaultLayout>
      <Form.Wrapper>
        <Form.Input
          id="Email"
          label="Email"
          value={email}
          onChange={setEmail}
          placeholder="your@email.com"
          regex={validateEmail}
        />
        <Form.Toggle
          id="enabled"
          onClick={setEnabled}
          active={enabled}
          label="Enabled"
        />
      </Form.Wrapper>
      <Form.Textarea
        id="message"
        label="message"
        value={message}
        onChange={setMessage}
        placeholder="your@email.com"
        regex={validateEmail}
      />
      <Button.Wrapper>
        <Button.Primary title="Primary" />
        <Button.Secondary title="Secondary" />
        <Button.White title="White" />
      </Button.Wrapper>
    </DefaultLayout>
  );
}
