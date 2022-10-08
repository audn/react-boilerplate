import { SyntheticEvent, useState } from 'react';
import { Button } from '../common/components/Buttons';
import { Form } from '../common/components/Form';
import H3 from '../common/components/layout/headings/H3';
import P from '../common/components/layout/headings/P';
import Title from '../common/components/layout/headings/Title';
import Hero from '../common/components/layout/Hero';
import { DefaultLayout } from '../common/layouts/Default';
import { validateEmail } from '../common/utils/helpers/regex/email';
import { useCats } from '../common/utils/hooks/cats';
import { Hydrate } from '../common/utils/hydration';

export default function Home() {
  const {
    data,
    isLoading,
    error: fetchError,
    refetch,
    isRefetching,
  } = useCats();

  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [enabled, setEnabled] = useState<boolean>(false);

  function onSubmit(e: SyntheticEvent) {
    e.preventDefault();
  }
  return (
    <DefaultLayout>
      <Hero>
        <Title>Boilerplate for building web applications with React</Title>
        <P className="max-w-2xl mt-8">
          Don't waste time structuring or setting up interfaces on your next
          project!
        </P>
      </Hero>
      <div className="w-full max-w-2xl mt-24">
        <H3>Input fields</H3>
        <Form.Layout onSubmit={onSubmit} className="my-10 space-y-5">
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
        </Form.Layout>
      </div>
      <Hydrate.Cats
        data={data}
        error={fetchError}
        isLoading={isLoading}
        refetch={refetch}
        isRefetching={isRefetching}
      />
    </DefaultLayout>
  );
}
