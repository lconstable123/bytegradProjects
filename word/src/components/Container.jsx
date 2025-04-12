import React, { useState } from "react";
import Textarea from "./Textarea";
import Stats from "./Stats";
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    characters: text.length,
    words: text.split(" ").length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    faceCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
  };
  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
