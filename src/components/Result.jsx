"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";


const Result = forwardRef( function Result({ result, challengeTime }, ref){
  
  const newDialog = useRef()

    useImperativeHandle(ref, () => {
      return {
        open(){
          newDialog.current.showModal();
        }
      }
    })


  return (
    <dialog ref={newDialog} className="result-modal backdrop:bg-[#000000e6]">
      <h2 className="font-semibold text-black">YOUR SCORE: {result}</h2>
      <p className="text-black">
        The target time was{" "}
        <strong>
          {challengeTime} second{challengeTime > 1 ? "s" : ""}.
        </strong>
        .
      </p>
      <p className="text-black">
        You stopped the timer with <strong>X seconds left</strong>.
      </p>
      <form method="dialog">
        <button className="w-fit self-end">Close</button>
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