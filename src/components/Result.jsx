"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";

const Result = forwardRef(function Result(
  { challengeTime, timeRemaining, onReset },
  ref
) {
  const newDialog = useRef();

  const userLost = timeRemaining <= 0;
  const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (challengeTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        newDialog.current.showModal();
      },
    };
  });

  return (
    <dialog
      onClose={onReset}
      ref={newDialog}
      className="result-modal backdrop:bg-[#000000e6]"
    >
      {userLost ? (
        <h2>You lost</h2>
      ) : (
        <h2 className="font-semibold text-black">Your Score: {score}</h2>
      )}
      <p className="text-black">
        The target time was{" "}
        <strong>
          {challengeTime} second{challengeTime > 1 ? "s" : ""}.
        </strong>
        .
      </p>
      <p className="text-black">
        You stopped the timer with{" "}
        <strong>{formattedTimeRemaining} seconds left</strong>.
      </p>
      <form onSubmit={onReset} method="dialog">
        <button type="submit" className="w-fit self-end">
          Close
        </button>
      </form>
    </dialog>
  );
});

export default Result;

// const dialog = useRef();
// useImperativeHandle(ref, () => {
//   return {
//     open() {
//       dialog.current.showModal();
//     },
//   };
// });
