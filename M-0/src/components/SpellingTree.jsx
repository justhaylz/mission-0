/** @format */

import styles from "../components/SpellingTree.module.css";
import Logo from "../assets/spellingTree.png";
import { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

function SpellingTree() {
  //Wordlist arrays based on NZ colourwheel Reading system
  const orange = [
    "man",
    "took",
    "think",
    "long",
    "things",
    "wanted",
    "eat",
    "everyone",
    "two",
    "thought",
    "dog",
    "well",
    "more",
    "I’ll",
    "tree",
    "shouted",
    "us",
    "other",
    "food",
    "through",
    "way",
    "been",
    "stop",
    "must",
    "red",
    "door",
    "right",
    "sea",
    "these",
    "began",
    "boy",
    "animals",
    "never",
    "work",
    "first",
    "lots",
    "that’s",
    "gave",
    "something",
    "bed",
    "may",
    "found",
    "live",
    "say",
    "night",
    "small",
    "three",
    "head",
    "town",
    "I’ve",
    "around",
    "every",
    "garden",
    "fast",
    "only",
    "many",
    "laughed",
    "let’s",
    "suddenly",
    "told",
    "word",
    "forgot",
    "better",
    "bring",
    "push",
  ];
  const turquoise = [
    "car",
    "couldn’t",
    "king",
    "great",
    "why",
    "cried",
    "keep",
    "room",
    "last",
    "jumped",
    "even",
    "before",
    "gran",
    "clothes",
    "tell",
    "key",
    "place",
    "boat",
    "window",
    "sleep",
    "feet",
    "morning",
    "queen",
    "each",
    "book",
    "its",
    "green",
    "different",
    "let",
    "which",
    "inside",
    "any",
    "hat",
    "snow",
    "air",
    "trees",
    "bad",
    "tea",
    "top",
    "eyes",
    "fell",
    "friends",
    "box",
    "dark",
    "grandad",
    "there’s",
    "better",
    "hot",
    "sun",
    "across",
    "gone",
    "hard",
    "really",
    "wind",
    "wish",
    "eggs",
    "once",
    "stopped",
    "ever",
    "miss",
    "cold",
    "park",
    "live",
    "birds",
    "duck",
    "horse",
    "rabbit",
    "white",
    "he’s",
    "river",
    "does",
    "long",
    "shout",
    "ball",
    "I’m",
  ];

  const purple = [
    "giant",
    "looks",
    "along",
    "plants",
    "dragon",
    "pulled",
    "we’re",
    "fly",
    "grow",
    "above",
    "during",
    "themselves",
    "bigger",
    "heard",
    "brought",
    "high",
    "turn",
    "change",
    "upon",
    "important",
    "outside",
    "swimming",
    "family",
    "following",
    "together",
    "finish",
    "happy",
    "tomorrow",
    "grandma",
    "uncle",
    "grandpa",
    "aunty",
    "sometimes",
    "clock",
    "money",
    "year",
    "already",
    "leave",
    "goodbye",
    "paper",
    "life",
    "gone",
    "between",
    "having",
    "both",
    "noise",
    "tries",
    "earth",
    "inside",
    "number",
    "easily",
    "often",
    "enjoy",
    "lady",
    "onto",
    "later",
    "won",
    "against",
    "dry",
    "anyone",
    "excuse",
    "lucky",
    "answer",
    "fruit",
    "minutes",
    "plenty",
    "biggest",
    "heavy",
    "mountain",
    "sacred",
    "break",
    "icecream",
    "mouth",
    "throw",
    "tonight",
    "centre",
    "lesson",
    "climb",
    "listen",
    "visit",
    "deep",
    "live",
    "plant",
    "afraid",
    "able",
  ];

  const gold = [
    "bathroom",
    "burst",
    "afternoon",
    "cushion",
    "afterwards",
    "customer",
    "alike",
    "difficult",
    "alright",
    "dinosaur",
    "buy",
    "banana",
    "face",
    "brown",
    "fastest",
    "fault",
    "few",
    "tried",
    "wait",
    "gigantic",
    "naughty",
    "photograph",
    "while",
    "pie",
    "piece",
    "weird",
    "world",
    "replied",
    "you’re",
    "air",
    "believe",
    "getting",
    "interesting",
    "accident",
    "boxes",
    "happened",
    "invent",
    "add",
    "breakfast",
    "hello",
    "invite",
    "altogether",
    "bubble",
    "shopping",
    "arrive",
    "hope",
    "special",
    "awful",
    "beginning",
    "hoping",
    "awake",
    "behind",
    "summer",
    "backwards",
    "calm",
    "trouble",
    "become",
    "decided",
    "twelve",
    "bedroom",
    "finally",
    "instead",
    "twenty",
    "ache",
    "blanket",
    "though",
    "allow",
    "build",
    "quarter",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "assembly",
    "somebody",
    "balance",
    "finished",
    "ballet",
    "hole",
    "square",
    "hour",
    "barbeque",
    "basket",
    "however",
    "knife",
    "actually",
    "activity",
    "parents",
    "camera",
    "address",
    "blown",
    "careful",
    "picked",
    "adventure",
    "question",
    "quietly",
    "hospital",
  ];

  const [selectedDifficulty, setSelectedDifficulty] = useState("medium"); // game difficulty default Medium
  const [currentWord, setCurrentWord] = useState(""); // random words
  const [userScore, setUserScore] = useState(0); // add user score state
  const { speak } = useSpeechSynthesis(); //used to add speak function for generated words
  const [difficulty, setDifficulty] = useState(""); // reset difficulty words based on level

  // ****** GENERATE WORD BUTTON ****** //
  //Generate word button functions
  const handleGenerateWord = () => {
    let wordList;
    switch (selectedDifficulty) {
      case "orange":
        wordList = orange;
        break;
      case "turquoise":
        wordList = turquoise;
        break;
      case "purple":
        wordList = purple;
        break;
      case "g":
        wordList = gold;
        break;
      default:
        wordList = turquoise; // Default level to medium
    }
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const randomWord = wordList[randomIndex];
    setCurrentWord(randomWord);

    // Speak the generated word
    speak({ text: randomWord });
  };
  //Change the voice to Zira from robot voice
  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance("Hello, world!");

  const selectedVoiceName = "Microsoft Zira Desktop";
  const voices = synth.getVoices();
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedVoiceName) {
      utterThis.voice = voices[i];
      break;
    }
  }
  synth.speak(utterThis);

  //Repeat word button functions
  const handleRepeatWord = () => {
    // Speak the repeated word
    speak({ text: currentWord });
  };

  const handleSubmit = (userGuess) => {
    if (typeof userGuess === "string") {
      if (userGuess.toLowerCase() === currentWord.toLowerCase()) {
        // Correct answer: increment the score
        setUserScore(userScore + 1);
        // Provide positive feedback
        console.log("Awesome Work, Correct! 🎉");
        window.alert("Correct! 🎉");
      } else {
        // Incorrect answer: no score change
        // Provide negative feedback
        console.log("Incorrect. Try again. 😕");
        window.alert("Incorrect. Try again. 😕");
      }
      console.log(`User guessed: ${userGuess}`);
    } else {
      console.log("Invalid input. Please provide a valid string.");
    }
  };
  // ****** [RESTART BUTTON] ******//
  // reset words based on difficulty when restart button pushed
  const restartWords = {
    orange: "man",
    turquoise: "car",
    purple: "giant",
    gold: "bathroom",
  };

  // eslint-disable-next-line no-unused-vars
  const handleRestart = () => {
    setUserScore(0); // Reset the score
    setCurrentWord(restartWords[difficulty]); // Reset the word based on difficulty

    return (
      <div className={styles.containter}>
        <img className={styles.logo} src={Logo} alt="logo-img" />
        <br />
        <input
          type="text"
          placeholder="Enter your guess"
          onChange={(e) => handleSubmit(e.target.value)}
        />
        <button className={styles.btn2} onClick={handleSubmit}>
          Submit
        </button>
        <p>Score: {userScore}</p> {/* Display the user's score */}
        <button className={styles.btn1} onClick={handleGenerateWord}>
          Generate Word
        </button>
        <button className={styles.btn3} onClick={handleRepeatWord}>
          Repeat Word
        </button>{" "}
        <br />
        <select
          className={styles.levels}
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
        >
          <option value="">Select Difficulty</option>
          <option value="Orange">Orange</option>
          <option value="Turquoise">Turquoise</option>
          <option value="Purple">Purple</option>
          <option value="Gold">Gold</option>
        </select>
        <button
          className={styles.btn4}
          onClick={handleRestart}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          Restart
        </button>
      </div>
    );
  };
}

export default SpellingTree;
