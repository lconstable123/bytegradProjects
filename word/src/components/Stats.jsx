export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.characters} heading="CHARACTERS" />
      <Stat number={stats.words} heading="WORDS" />
      <Stat number={stats.faceCharactersLeft} heading="FACEBOOK" />
      <Stat number={stats.instagramCharactersLeft} heading="INSTAGRAM" />
    </section>
  );
}

function Stat({ number, heading }) {
  return (
    <section className="stat">
      <span
        className={`stats__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{heading}</h2>
    </section>
  );
}
