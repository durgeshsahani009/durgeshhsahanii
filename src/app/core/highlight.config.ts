import hljs from 'highlight.js/lib/core';

// Register languages
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import json from 'highlight.js/lib/languages/json';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);   // HTML
hljs.registerLanguage('json', json);

export default hljs;
