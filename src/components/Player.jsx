"use client"

import { useRef, useState } from "react";

// import { useState } from "react";


export default function Player() {

// Show text with onChange() method //

//  const [playerName, setPlayerName] = useState("Player")
//  const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleChange = (e) => {
//     setIsSubmitted(false)
//     setPlayerName(e.target.value)
//   }

//   const handleClick = () => {
//     setIsSubmitted(true)
//   }

//  onChange={handleChange}

// value={playerName}

// isSubmitted ? `Player ${playerName}` : "Player"


// Show text with useRef() method //

  const [editableName, setEditableName] = useState("Player")
  const editableNameRef = useRef()

  const handleClick = () => {
    setEditableName(editableNameRef.current.value)
    editableNameRef.current.value = ""
  }


  return (
    <section id="player">
      <h2 className="text-3xl mb-6">Welcome {editableName}</h2>
      <p>
        <input ref={editableNameRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
