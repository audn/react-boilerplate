import { SyntheticEvent, useState } from 'react';
import { Button } from '../common/components/Buttons';
import { Form } from '../common/components/Form';
import H3 from '../common/components/layout/headings/H3';
import P from '../common/components/layout/headings/P';
import Title from '../common/components/layout/headings/Title';
import Hero from '../common/components/layout/Hero';
import SyntaxHighlight from '../common/components/layout/SyntaxHighlight';
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
  const [anonymous, setAnonymous] = useState<boolean>(false);

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
      <div className="mt-24">
        <H3>Function-wrapped components</H3>
        <div className="flex mt-10 space-x-20">
          <div className="w-full max-w-xl">
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
              <Button.Wrapper>
                <Button.Primary title="Primary" />
                <Button.Secondary title="Secondary" />
                <Button.White title="White" />
              </Button.Wrapper>
            </Form.Layout>
          </div>
          <div className="w-full !text-sm">
            <SyntaxHighlight />
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Hydrate.Cats
          data={data}
          error={fetchError}
          isLoading={isLoading}
          refetch={refetch}
          isRefetching={isRefetching}
        />
      </div>
    </DefaultLayout>
  );
}
