/** @format */

import styles from "../components/GameCard.module.css";
import Logo from "../assets/spellingTree.png";
import React, { useState } from "react";
import annyang from "annyang";

function GameCard() {
  const [generatedWord, setGeneratedWord] = useState("");
  const [userGuess, setUserGuess] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleGenerateWord = () => {
    if (annyang) {
      annyang.start();
      annyang.addCallback("result", (phrases) => {
      const word = phrases[0]; // Assuming you want the first recognized phrase
        setGeneratedWord(word);
      });
    }
   };

    const handleRepeatWord = () => {
      // Play the generated word (you can use text-to-speech libraries)
      // For simplicity, let's just log it to the console
      console.log("Generated Word:", generatedWord);
    };

    const handleGuessSubmit = () => {
      if (userGuess.toLowerCase() === generatedWord.toLowerCase()) {
        setFeedback("Correct! 🎉");
      } else {
        setFeedback("Incorrect. Try again. 😕");
      }
    };

    return (
      <div className={styles.container}>
        <img className={styles.logo} src={Logo} alt="logo-img" />
        <br />
        <br />
        <br />
        <div className={styles.gameCard}>
          <form>
            <input
              type="text"
              placeholder="Enter your guess"
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
              className={styles.input}/>
            <div className={styles.btns}>
              <button 
              onClick={handleGenerateWord} 
              className={styles.btn1}>
                Generate Word
              </button>
              <br />
              <button 
              onClick={handleRepeatWord} 
              className={styles.btn2}>Repeat Word</button>
              <button 
              onClick={handleGuessSubmit} 
              className={styles.btn3}>Submit</button>
              <p>{feedback}</p>
              <br />
              <button 
                className={styles.btn4}>Level</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

export default GameCard;
