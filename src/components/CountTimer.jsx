// CountTimer.js
import React, { useEffect, useState } from "react";

const CountTimer = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [showSettings, setShowSettings] = useState(true); // State for controlling visibility

    useEffect(() => {
        let timer;
        if (isRunning && (hours > 0 || minutes > 0 || seconds > 0)) {
            timer = setInterval(() => {
                seconds > 0
                    ? setSeconds(seconds - 1)
                    : minutes > 0
                    ? (() => {
                          setMinutes(minutes - 1);
                          setSeconds(59);
                      })()
                    : hours > 0
                    ? (() => {
                          setHours(hours - 1);
                          setMinutes(59);
                          setSeconds(59);
                      })()
                    : setIsRunning(false);
            }, 1000);
        } else if (hours === 0 && minutes === 0 && seconds === 0) {
            setIsRunning(false);
        }
        return () => clearInterval(timer);
    }, [isRunning, hours, minutes, seconds]);

    const handleStart = () => {
        setIsRunning(true);
        setShowSettings(false); // Hide setting component when timer starts
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setShowSettings(true); // Show setting component when timer resets
    };

    const handleInputChange = (e, type) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= 0) {
            switch (type) {
                case "hours":
                    setHours(value);
                    break;
                case "minutes":
                    setMinutes(value);
                    break;
                case "seconds":
                    setSeconds(value);
                    break;
                default:
                    break;
            }
        }
    };

    // Function to format time with unit
    const formatTimeWithUnit = () => {
        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
                .toString()
                .padStart(2, "0")} hrs`;
        } else if (minutes > 0) {
            return `${minutes}:${seconds.toString().padStart(2, "0")} min`;
        } else {
            return `${seconds} sec`;
        }
    };

    return (
        <div className="text-black text-center border-red-700 border  h-screen flex flex-col justify-center items-center overflow-y-hidden bg-slate-500">
            <h1 className="text-4xl font-bold mb-4">Countdown Timer</h1>
            {showSettings && (
                <div>
                    <div className="flex justify-center mt-4">
                        <input
                            type="number"
                            className="border border-gray-300 rounded w-20 px-4 py-2 mx-2"
                            value={hours}
                            onChange={(e) => handleInputChange(e, "hours")}
                            placeholder="Hours"
                        />
                        <input
                            type="number"
                            className="border border-gray-300 rounded w-20 px-4 py-2 mx-2"
                            value={minutes}
                            onChange={(e) => handleInputChange(e, "minutes")}
                            placeholder="Minutes"
                        />
                        <input
                            type="number"
                            className="border border-gray-300 rounded w-20 px-4 py-2 mx-2"
                            value={seconds}
                            onChange={(e) => handleInputChange(e, "seconds")}
                            placeholder="Seconds"
                        />
                    </div>
                </div>
            )}
            {!showSettings && (
                <div>
                    {/* <h1 className="text-4xl font-bold mb-4">Countdown Timer</h1> */}
                    <div className="flex justify-center text-8xl font-bold mt-4">
                        <span className="timer">{formatTimeWithUnit()}</span>
                    </div>
                </div>
            )}
            <div className="flex lg:flex-row flex-wrap justify-center mt-4">
                <button
                    className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl py-3 px-5 rounded m-2"
                    onClick={handleStart}
                >
                    Start
                </button>
                <button
                    className="flex-1 bg-red-500 hover:bg-red-700 text-white font-bold text-2xl py-3 px-5 rounded m-2"
                    onClick={handleStop}
                >
                    Stop
                </button>
                <button
                    className="flex-1 bg-gray-500 hover:bg-gray-700 text-white font-bold text-2xl py-3 px-5  rounded m-2"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default CountTimer;
