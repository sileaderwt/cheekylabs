import React from 'react';
import './BlockStyles.css';

function CodeDisplay({ lines, highlightLines }) {
    return (
        <pre className="bg-dark text-white p-3 rounded" style={{ fontSize: '0.9rem' }}>
            {lines.map((line, idx) => (
                <div
                    key={idx}
                    style={{
                        backgroundColor: highlightLines.includes(idx) ? '#333' : 'transparent',
                        padding: '2px 0'
                    }}
                >
                    <code>
                        <span style={{ color: 'gray' }}>{String(idx + 1).padStart(2, '0')}: </span>
                        {line}
                    </code>
                </div>
            ))}
        </pre>
    );
}

export default CodeDisplay;
