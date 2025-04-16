import React from 'react';
import './BlockStyles.css';

function ArrayDisplay({ array, highlightI, highlightJ }) {
    return (
        <div className="d-flex gap-2 mt-3">
            {array.map((val, idx) => (
                <div
                    key={idx}
                    className={`block ${idx === highlightI ? 'bg-success' : idx === highlightJ ? 'bg-warning' : 'bg-light'}`}
                >
                    {val}
                </div>
            ))}
        </div>
    );
}

export default ArrayDisplay;
