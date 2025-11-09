import Stat from "./Stat";

export default function Statistics({ good, neutral, bad }) {
  const all = good + neutral + bad;
  const average = all > 0 ? (good - bad) / all : 0;
  const positive = all > 0 ? (good * 100) / all : 0;

  if(all <= 0){
    return (
        <div>
            <h2>Statistics</h2>
            No feedback given
        </div>
    );
  }

  return (
    <div>
        <h2>Statistics</h2>
        <Stat text="Good" value={ good } />
        <Stat text="Neutral" value={ neutral } />
        <Stat text="Bad" value={ bad } />
        <Stat text="All" value={ all } />
        <Stat text="Average" value={ average } />
        <Stat text="Positive" value={ positive } />
    </div>
  )
}