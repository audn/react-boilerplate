import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from '../../utils/data/theme';

function SyntaxHighlight() {
  const codeString = `<Form.Layout onSubmit={onSubmit} className="space-y-5">
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
</Form.Layout>`;
  return (
    <SyntaxHighlighter
      language="jsx"
      /* @ts-ignore */
      style={theme}
      showLineNumbers={true}
      wrapLines={true}
    >
      {codeString}
    </SyntaxHighlighter>
  );
}

export default SyntaxHighlight;
