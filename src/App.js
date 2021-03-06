import { useState } from "react";
import "./styles.css";
export default function App() {
  const [meaning, setMeaning] = useState("");

  var emojiDatabase = {
    "ðĪĢ": "Rolling on the Floor Laughing",
    "ð": "Slightly Smiling/This is fine",
    "ðĪĐ": "Star-Struck",
    "ð": "Tears of Joy",
    "ð": "Upside-Down",
    "ð": "Smirking",
    "ð": "Unamused",
    "ðĻ": "Scared",
    "ð": "Neutral",
    "ð": "Expressionless",
    "ð": "Relieved",
    "ð": "Cool",
    "ðē": "Astonished",
    "ðī": "Sleeping",
    "ð": "Delicious/Tasty",
    "ð ": "Angry",
    "ð": "Sad",
    "ð": "Grinning",
    "ðĪ": "Thinking Face",
    "ð": "Sorrowful",
    "ðŽ": "Awkward",
    "ðĪ": "Sick",
    "ðĪ": "Injured",
    "ðĪŊ": "Mind Blown",
    "ðĨģ": "Party Face",
    "ðĨš": "Pleading",
    "ð­": "Crying",
    "ðĨ°": "In Love",
    "ð": "Heart Eyes",
    "ð": "Wink",
    "ðĪŠ": "Excited",
    "ð": "Crazy",
    "ð": "Like",
    "ðĪ": "Handshake",
    "âĪïļ": "Heart"
  };

  var emojiArray = Object.keys(emojiDatabase);
  function changeEventHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDatabase[userInput];
    if (meaning === undefined) {
      meaning = "Sorry we don't have that in our database ð";
    }
    setMeaning(meaning);
  }
  function emojiCLickHandler(emoji) {
    var meaning = emojiDatabase[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Translator</h1>
      <input
        id="input"
        placeholder="Enter Emoji"
        onChange={changeEventHandler}
      ></input>
      <p id="meaning">{meaning}</p>
      <h2>Emojis we know: </h2>
      {emojiArray.map(function (emoji) {
        return (
          <span
            id="emojiDatabase"
            onClick={() => emojiCLickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
