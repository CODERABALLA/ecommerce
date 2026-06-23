"use client";

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

    const decrease = () => {
        setCount((prev) => prev - 1);
    };

    const increase = () => {
        setCount((prev) => prev + 1);
    };

    const handleSetCount = () => {
        const newValue = Number(inputValue);
        if (!Number.isNaN(newValue)) {
            setCount(newValue);
        }
        setInputValue("");
    };

    return (
        <div className="flex flex-col items-center gap-6 p-8">
            <div className="flex items-center gap-4">
                <button
                    onClick={decrease}
                    className="bg-black text-white w-10 h-10 rounded text-xl"
                >
                    −
                </button>

                <span className="text-2xl font-bold w-16 text-center">{count}</span>

                <button
                    onClick={increase}
                    className="bg-black text-white w-10 h-10 rounded text-xl"
                >
                    +
                </button>
            </div>

            <div className="flex items-center gap-2">
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Set count"
                    className="border p-2 rounded text-center w-32"
                />
                <button
                    onClick={handleSetCount}
                    className="bg-gray-700 text-white px-4 py-2 rounded"
                >
                    Set
                </button>
            </div>
        </div>
    );
};

export default Counter;