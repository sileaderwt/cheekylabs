import React from 'react';
import './BlockStyles.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeDisplay({ lines, highlightLines }) {
    const formattedCode = lines.map((line, idx) => {
        return highlightLines.includes(idx)
            ? `--> ${line}`
            : line;
    }).join('\n');

    return (
        <SyntaxHighlighter language="javascript" style={solarizedlight}>
            {formattedCode}
        </SyntaxHighlighter>
    );
}


export default CodeDisplay;
