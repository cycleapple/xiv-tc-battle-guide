// Fix: Docusaurus code block copy button uses \n line endings,
// but FF14 game client on Windows requires \r\n to recognize line breaks.
// This intercepts clipboard.writeText to convert \n → \r\n.
if (typeof window !== 'undefined' && navigator.clipboard) {
  const original = navigator.clipboard.writeText.bind(navigator.clipboard);
  navigator.clipboard.writeText = function (text) {
    return original(text.replace(/\r?\n/g, '\r\n'));
  };
}
