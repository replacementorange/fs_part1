import { useState } from 'react'

// Button with click handler
const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>

      <Button text = "good" onClick={() => setGood(good + 1)}/>
      <Button text = "neutral" onClick={() => setNeutral(neutral + 1)}/>
      <Button text = "bad" onClick={() => setBad(bad + 1)}/>

      <h2>statistics</h2>

      <p>good {good}<br/> neutral {neutral}<br/> bad {bad}</p>
    </div>
  )
}

export default App