import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from '../../utils/data/theme';

function SyntaxHighlight({ code }: { code: string }) {
  const codeString = code;
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
