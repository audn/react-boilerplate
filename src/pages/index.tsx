import { useState } from 'react';
import { Form } from '../common/components/Form';
import { DefaultLayout } from '../common/layouts/Default';
import { validateUrl } from '../common/utils/helpers/regex/url';

export default function Home() {
  const [text, setText] = useState<string>('');
  return (
    <DefaultLayout title={'Index'}>
      {text}
      <div className="p-36">
        <Form.Input
          id="title"
          value={text}
          onChange={setText}
          placeholder="text"
          regex={validateUrl}
        />
      </div>
    </DefaultLayout>
  );
}
