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

  // Using const because: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
  // feedback count
  const all = good + neutral + bad
  // average
  const avg = (good - bad) / all
  // positive %
  const pos = good / all * 100

  return (
    <div>
      <h1>give feedback</h1>

      <Button text = "good" onClick={() => setGood(good + 1)}/>
      <Button text = "neutral" onClick={() => setNeutral(neutral + 1)}/>
      <Button text = "bad" onClick={() => setBad(bad + 1)}/>

      <h2>statistics</h2>

      <p> good {good}<br/>
          neutral {neutral}<br/>
          bad {bad} <br/>
          all {all}<br/>
          average {avg}<br/>
          positive {pos} %</p>
    </div>
  )
}

export default App