import { useState } from 'react';
import { Form } from '../common/components/Form';
import { DefaultLayout } from '../common/layouts/Default';
import { validateEmail } from '../common/utils/helpers/regex/email';

export default function Home() {
  const [email, setEmail] = useState<string>('');
  const [yes, setYes] = useState<boolean>(false);

  function onEmailChange(val: string) {
    setEmail(val);
  }
  return (
    <DefaultLayout title={'Index'}>
      <div className="p-36">
        <Form.Wrapper>
          <Form.Input
            id="Email"
            label="Email"
            value={email}
            onChange={onEmailChange}
            placeholder="your@email.com"
            regex={validateEmail}
          />
          <Form.Toggle
            id="yes"
            onClick={setYes}
            active={yes}
            label="arey ou cool"
          />
        </Form.Wrapper>
      </div>
    </DefaultLayout>
  );
}
