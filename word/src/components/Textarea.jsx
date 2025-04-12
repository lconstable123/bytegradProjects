import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({ text, setText }) {
  const [warningText, setWarningText] = useState("");
  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      setWarningText("No script tags allowed!");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("No @ allowed!");
      newText = newText.replace("@", "");
    } else {
      setWarningText("");
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        placeholder="Enter your text"
        spellCheck="false"
        autoComplete="off"
        value={text}
        onChange={handleChange}
      />
      <Warning warningText={warningText} />
    </div>
  );
}
