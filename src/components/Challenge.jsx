"use client";

import { useRef, useState } from "react";
import Result from "./Result";

const Challenge = ({ challengeLevel, challengeTime }) => {


  const timer = useRef();
  const dialog = useRef();

  // const [isChallengeStarted, setIsChallengeStarted] = useState(false);
  // const [isExpired, setIsExpired] = useState(false);

  const [timeRemaining, setTimeRemaining] = useState(challengeTime * 1000)

  const timerIsActive = timeRemaining < challengeTime * 1000  && timeRemaining > 0
  
  if(timeRemaining <= 0){
    clearInterval(timer.current)
    dialog.current.open();
  }

  const handleReset = () => {
    setTimeRemaining(challengeTime * 1000)
  }

  const handleStart = () => {

    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining => prevTimeRemaining - 10))
    }, 10)

    // timer.current = setTimeout(() => {
    //   setIsChallengeStarted((isChallengeStarted) => !isChallengeStarted); // setIsChallengeStarted((isChallengeStarted) => !isChallengeStarted);
    //   setIsExpired((isExpired) => !isExpired); // true // (isExpired) => !isExpired
    //   dialog.current.open(); // dialog.current.open();
    // }, challengeTime * 1000);
    // setIsExpired(false); // setIsExpired(false);
    // setIsChallengeStarted((isChallengeStarted) => !isChallengeStarted); // true / (isChallengeStarted) => !isChallengeStarted
  };
  
  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current);
    // setIsChallengeStarted((isChallengeStarted) => !isChallengeStarted); // true / (isChallengeStarted) => !isChallengeStarted
    // setIsExpired((isExpired) => (!isExpired)); // true // (isExpired) => !isExpired

  };

  return (
    <>
      <Result onReset={handleReset} timeRemaining={timeRemaining} ref={dialog} challengeTime={challengeTime} />
      <div className="challenge relative h-[280px]">
        <h2>{challengeLevel}</h2>
        <p className="challenge-time">
          {challengeTime} second{challengeTime > 1 ? "s" : null}
        </p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? "Stop" : "Start"} Challenge
        </button>
        <p
          className={`${
            timerIsActive && "text-[12px] text-white animate-ping"
          } pt-6`}
        >
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </div>
    </>
  );
};

export default Challenge;
