import React from 'react';
import './BlockStyles.css';

function DPDisplay({ dp, currentIndex }) {
    return (
        <div className="d-flex gap-2 mt-2">
            {dp.map((val, idx) => (
                <div
                    key={idx}
                    className={`block small ${idx === currentIndex ? 'bg-info' : 'bg-secondary'}`}
                >
                    {val}
                </div>
            ))}
        </div>
    );
}

export default DPDisplay;
