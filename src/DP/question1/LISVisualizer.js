import React, { useState, useEffect } from 'react';
import ArrayDisplay from './ArrayDisplay';
import DPDisplay from './DPDisplay';
import StepControls from './StepControls';
import CodeDisplay from './CodeDisplay';

const inputArray = [10, 9, 2, 5, 3, 7, 101, 18];

const lisCodeLines = [
    "const dp = new Array(inputArray.length).fill(1);",
    "for (let i = 0; i < inputArray.length; i++) {",
    "    for (let j = 0; j < i; j++) {",
    "        if (inputArray[i] > inputArray[j]) {",
    "            dp[i] = Math.max(dp[i], dp[j] + 1);",
    "        } else {",
    "            // no update",
    "        }",
    "    }",
    "}"
];

function LISVisualizer() {
    const [steps, setSteps] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);

    // Prepare the step-by-step simulation
    useEffect(() => {
        const stepList = [];
        const dp = new Array(inputArray.length).fill(1);

        for (let i = 0; i < inputArray.length; i++) {
            for (let j = 0; j < i; j++) {
                const prevDp = [...dp];
                if (inputArray[i] > inputArray[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                    stepList.push({
                        i,
                        j,
                        dp: [...dp],
                        explanation: `nums[${i}] (${inputArray[i]}) > nums[${j}] (${inputArray[j]}), so dp[${i}] = ${dp[i]}`,
                        codeLines: [2, 3, 4]
                    });
                } else {
                    stepList.push({
                        i,
                        j,
                        dp: [...dp],
                        explanation: `nums[${i}] (${inputArray[i]}) <= nums[${j}] (${inputArray[j]}), no update`,
                        codeLines: [2, 5, 6]
                    });
                }
            }
        }

        setSteps(stepList);
    }, []);

    const step = steps[currentStep] || { i: -1, j: -1, dp: [], explanation: '' };

    return (
        <div className="container mt-4">
            <h2>Longest Increasing Subsequence Visualizer</h2>
            <ArrayDisplay array={inputArray} highlightI={step.i} highlightJ={step.j} />
            <DPDisplay dp={step.dp} currentIndex={step.i} />
            <div className="mt-3">
                <p><strong>Step Explanation:</strong> {step.explanation}</p>
                <StepControls
                    step={currentStep}
                    totalSteps={steps.length}
                    onNext={() => setCurrentStep((s) => Math.min(s + 1, steps.length - 1))}
                    onBack={() => setCurrentStep((s) => Math.max(s - 1, 0))}
                />
            </div>
            <CodeDisplay
                lines={lisCodeLines}
                highlightLines={step.codeLines || []}
            />
        </div>
    );
}

export default LISVisualizer;
