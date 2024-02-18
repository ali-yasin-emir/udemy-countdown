"use client";

import Challenge from "./Challenge";


const Challenges = () => {

  return (
    <div id="challenges" className="relative flex flex-wrap justify-center">
      <Challenge challengeLevel="EASY" challengeTime={1} />
      <Challenge challengeLevel="NOT EASY" challengeTime={5} />
      <Challenge challengeLevel="GETTING TOUGH" challengeTime={10} />
      <Challenge challengeLevel="PROS ONLY" challengeTime={15} />
    </div>
  );
};

export default Challenges;
