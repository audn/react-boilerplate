import { useState } from 'react';
import { Form } from '../common/components/Form';
import { DefaultLayout } from '../common/layouts/Default';
import { validateUrl } from '../common/utils/helpers/regex/url';

export default function Home() {
  const [text, setText] = useState<string>('');
  const [yes, setYes] = useState<boolean>(false);
  return (
    <DefaultLayout title={'Index'}>
      {text}
      <div className="p-36">
        <Form.Wrapper>
          <Form.Input
            id="title"
            value={text}
            onChange={setText}
            placeholder="text"
            regex={validateUrl}
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
