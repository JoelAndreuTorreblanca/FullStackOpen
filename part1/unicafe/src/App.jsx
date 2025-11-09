import { useState } from 'react'
import Display from "./components/Display";
import Statistics from './components/Statistics';

// Exercise 1.8: I already did it using a 'Statistics' component from the begining
// Exercise 1.10: I already did it using a 'Button' and a 'Stat' components from the begining
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Display
        good={ good } setGood={ setGood }
        neutral={ neutral } setNeutral={ setNeutral }
        bad={ bad } setBad={ setBad }
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App