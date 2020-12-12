import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "Disappointed",
  "😠": "Angry face",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "😘": "Face Blowing a Kiss",
  "😋": "Face Savoring Food",
  "😛": "FunnyFace with Tongue",
  "🤑": "Money-Mouth Face",
  "😪": "Sleepy Face",
  "😭": "Loudly Crying Face",
  "😓": "Downcast Face with Sweat",
  "😠": "Angry Face",
  "👿": "Angry Face with Horns"
};

export default function App() {
  const emojisknown = Object.keys(emojiDictionary);
  const [meaning, setmeaning] = useState("");
  const [meaning1, setmeaning1] = useState("");

  function clickhandler(emoji) {
    var meaning1 = emojiDictionary[emoji];
    setmeaning1(meaning1);
  }

  function texthandler(event) {
    var a = event.target.value;
    if (a in emojiDictionary) {
      setmeaning(emojiDictionary[a]);
    } else {
      setmeaning("Not found");
    }
  }
  return (
    <div className="App">
      <div class="stylee">
        <h1>Emojipedia</h1>
        <h2>home of emoji meanings</h2>
      </div>

      <input
        onChange={texthandler}
        placeholder="please enter your emoji here"
        style={{ backgroundColor: "yellowgreen", fontSize: "large" }}
      />
      <h2>{meaning}</h2>
      <h3 style={{ paddingTop: "6rem" }}>
        Click below emoji's to know meaning
      </h3>
      {emojisknown.map(function (emoji) {
        return (
          <span
            onClick={() => clickhandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <h2>{meaning1}</h2>
      <h3 class="foot">Thankyou ! Visit again 😊 </h3>
      <small style={{ fontSize: "15px" }}>sainitheesh creations $$</small>
    </div>
  );
}
