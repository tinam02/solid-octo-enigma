import React from 'react';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

interface Props {
  className?: string;
  onClick?: () => void;
  text: string;
}

const MD: React.FC<Props> = ({ className, onClick, text }) => {
  return <Markdown rehypePlugins={[rehypeHighlight]}>{text}</Markdown>;
};

export default MD;
