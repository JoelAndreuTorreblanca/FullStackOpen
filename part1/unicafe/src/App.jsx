import { useState } from 'react'
import Display from "./components/Display";
import Statistics from './components/Statistics';

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