import { useState } from "react";
import "./styles.css";
export default function App() {
  const [meaning, setMeaning] = useState("");

  var emojiDatabase = {
    "🤣": "Rolling on the Floor Laughing",
    "🙂": "Slightly Smiling/This is fine",
    "🤩": "Star-Struck",
    "😂": "Tears of Joy",
    "🙃": "Upside-Down",
    "😏": "Smirking",
    "😒": "Unamused",
    "😨": "Scared",
    "😐": "Neutral",
    "😑": "Expressionless",
    "😌": "Relieved",
    "😎": "Cool",
    "😲": "Astonished",
    "😴": "Sleeping",
    "😋": "Delicious/Tasty",
    "😠": "Angry",
    "🙁": "Sad",
    "😀": "Grinning",
    "🤔": "Thinking Face",
    "😔": "Sorrowful",
    "😬": "Awkward",
    "🤒": "Sick",
    "🤕": "Injured",
    "🤯": "Mind Blown",
    "🥳": "Party Face",
    "🥺": "Pleading",
    "😭": "Crying",
    "🥰": "In Love",
    "😍": "Heart Eyes",
    "😉": "Wink",
    "🤪": "Excited",
    "😜": "Crazy",
    "👍": "Like",
    "🤝": "Handshake",
    "❤️": "Heart"
  };

  var emojiArray = Object.keys(emojiDatabase);
  function changeEventHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDatabase[userInput];
    if (meaning === undefined) {
      meaning = "Sorry we don't have that in our database 🙁";
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
