"use client";

import { useRef, useState } from "react";
import Result from "./Result";

const Challenge = ({ challengeLevel, challengeTime }) => {
  const timer = useRef();
  const dialog = useRef();

  const [isChallengeStarted, setIsChallengeStarted] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  const [] = useState();

  const handleStart = () => {
    timer.current = setTimeout(() => {
      setIsChallengeStarted((isChallengeStarted) => !isChallengeStarted); // setIsChallengeStarted((isChallengeStarted) => !isChallengeStarted);
      setIsExpired((isExpired) => !isExpired); // true // (isExpired) => !isExpired
      dialog.current.open(); // dialog.current.open();
    }, challengeTime * 1000);
    setIsExpired(false); // setIsExpired(false);
    setIsChallengeStarted((isChallengeStarted) => !isChallengeStarted); // true / (isChallengeStarted) => !isChallengeStarted
  };

  const handleStop = () => {
    clearTimeout(timer.current);
    setIsChallengeStarted((isChallengeStarted) => !isChallengeStarted); // true / (isChallengeStarted) => !isChallengeStarted
    setIsExpired((isExpired) => !isExpired); // true // (isExpired) => !isExpired
  };

  return (
    <>
      <Result ref={dialog} result="lost" challengeTime={challengeTime} />
      <div className="challenge relative h-[280px]">
        <h2>{challengeLevel}</h2>
        <p className="challenge-time">
          {challengeTime} second{challengeTime > 1 ? "s" : null}
        </p>
        <button onClick={isChallengeStarted ? handleStop : handleStart}>
          {isChallengeStarted ? "Stop" : "Start"} Challenge
        </button>
        <p
          className={`${
            isChallengeStarted && "text-[12px] text-white animate-ping"
          } pt-6`}
        >
          {isChallengeStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </div>
    </>
  );
};

export default Challenge;
