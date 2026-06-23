"use client";

import { useState } from "react";

const Calculator = () => {
    const [display, setDisplay] = useState("0");
    const [previousValue, setPreviousValue] = useState<number | null>(null);
    const [operator, setOperator] = useState<string | null>(null);

    const handleNumber = (num: string) => {
        setDisplay((prev) => (prev === "0" ? num : prev + num));
    };

    const handleOperator = (op: string) => {
        setPreviousValue(Number(display));
        setOperator(op);
        setDisplay("0");
    };

    const handleEquals = () => {
        if (previousValue === null || operator === null) return;

        const current = Number(display);
        let result = 0;

        if (operator === "+") result = previousValue + current;
        if (operator === "-") result = previousValue - current;
        if (operator === "×") result = previousValue * current;
        if (operator === "÷") result = previousValue / current;

        setDisplay(String(result));
        setPreviousValue(null);
        setOperator(null);
    };

    const handleClear = () => {
        setDisplay("0");
        setPreviousValue(null);
        setOperator(null);
    };

    const buttons = [
        "7", "8", "9", "÷",
        "4", "5", "6", "×",
        "1", "2", "3", "-",
        "0", "C", "=", "+",
    ];

    const handlePress = (btn: string) => {
        if (btn === "C") return handleClear();
        if (btn === "=") return handleEquals();
        if (["+", "-", "×", "÷"].includes(btn)) return handleOperator(btn);
        return handleNumber(btn);
    };

    return (
        <div className="flex flex-col items-center p-8">
            <div className="w-64 border rounded shadow-md overflow-hidden">
                <input
                    type="text"
                    value={display}
                    readOnly
                    className="w-full text-right text-2xl p-4 border-b outline-none"
                />
                <div className="grid grid-cols-4 gap-1 p-2">
                    {buttons.map((btn) => (
                        <button
                            key={btn}
                            onClick={() => handlePress(btn)}
                            className={`p-4 rounded text-lg font-medium ${btn === "="
                                    ? "bg-black text-white"
                                    : ["+", "-", "×", "÷", "C"].includes(btn)
                                        ? "bg-gray-300 text-black"
                                        : "bg-gray-100 text-black"
                                }`}
                        >
                            {btn}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calculator;