import Button from "./Button";

export default function Display(props) {

  const handleGoodClick = () => props.setGood(props.good + 1);
  const handleNeutralClick = () => props.setNeutral(props.neutral + 1);
  const handleBadClick = () => props.setBad(props.bad + 1);

  return (
    <div>
        <h2>Give feedback</h2>
        <Button handleClick={() => handleGoodClick()} text="Good" />
        <Button handleClick={() => handleNeutralClick()} text="Neutral" />
        <Button handleClick={() => handleBadClick()} text="Bad" />
    </div>
  )
}