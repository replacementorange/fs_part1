import { useState } from 'react'

// Button with click handler
// handles the functionality of each feedback submission button
const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

// Statistic line component
// https://stackoverflow.com/questions/55820297/how-to-fix-warning-validatedomnesting-div-cannot-appear-as-a-child-of
// "You implicitly render it inside <tbody> through the lines"
const StatisticLine = (props) => {
  return(
    <tr><td>{props.text} {props.value}</td></tr>
  )
}

// Statistics component
const Statistics = ({good, neutral, bad}) => {
  // Using const because: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
  // feedback count
  const all = good + neutral + bad
  // average
  const avg = (good - bad) / all
  // positive %
  const pos = good / all * 100

  // if there is no feedback, return text
  if(all == 0) {
    return(
      <p>No feedback given</p>
    )
  }
  // else return statistics
  else {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={good}/>
            <StatisticLine text="neutral" value={neutral}/>
            <StatisticLine text="bad" value={bad}/>
            <StatisticLine text="all" value={all}/>
            <StatisticLine text="average" value={avg}/>
            <StatisticLine text="positive" value={pos + " %"}/>
          </tbody>
        </table>
      </div>
    )
  }

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

      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App