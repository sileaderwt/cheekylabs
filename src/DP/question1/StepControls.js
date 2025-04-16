import React from 'react';
import { Button } from 'react-bootstrap';

function StepControls({ step, totalSteps, onNext, onBack }) {
    return (
        <div className="d-flex gap-2">
            <Button onClick={onBack} disabled={step === 0}>Back</Button>
            <Button onClick={onNext} disabled={step === totalSteps - 1}>Next</Button>
            <span className="align-self-center">Step {step + 1} of {totalSteps}</span>
        </div>
    );
}

export default StepControls;
