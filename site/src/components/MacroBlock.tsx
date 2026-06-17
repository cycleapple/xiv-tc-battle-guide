import React, {useState} from 'react';

type MacroBlockProps = {
  children: string;
};

export default function MacroBlock({children}: MacroBlockProps): React.ReactNode {
  const [copied, setCopied] = useState(false);
  const text = String(children).replace(/^\n|\n$/g, '');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text.replace(/\r?\n/g, '\r\n');
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <div className="ffxiv-macro-block">
      <button className="ffxiv-macro-block__copy" type="button" onClick={copy}>
        {copied ? '已複製' : '複製'}
      </button>
      <div className="ffxiv-macro-block__text">{text}</div>
    </div>
  );
}
