import Stat from "./Stat";

export default function Statistics({ good, neutral, bad }) {
  return (
    <div>
        <h2>Statistics</h2>
        <Stat text="Good" value={good} />
        <Stat text="Neutral" value={neutral} />
        <Stat text="Bad" value={bad} />
    </div>
  )
}