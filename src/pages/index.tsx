import { SyntheticEvent, useState } from 'react';
import { Button } from '../common/components/Buttons';
import { Form } from '../common/components/Form';
import H1 from '../common/components/layout/headings/H1';
import H2 from '../common/components/layout/headings/H2';
import H3 from '../common/components/layout/headings/H3';
import P from '../common/components/layout/headings/P';
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
    console.log('ay');
  }
  return (
    <DefaultLayout>
      <H1>H1</H1>
      <H2>H2</H2>
      <H3>H3</H3>
      <P block className="max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{' '}
        <>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </>
        <>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </>{' '}
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </P>
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
