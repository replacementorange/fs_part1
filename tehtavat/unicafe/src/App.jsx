import { useState } from 'react'

// Header
const Header = (props) => {
  return(
    <h1>{props.header}</h1>
  )
}

// Main app
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>

      <div>
      <Header header="give feedback"/>

      <button>good</button>
      <button>neutral</button>
      <button>bad</button>

      <Header header="statistics"/>

      <p>good</p>
      <p>neutral</p>
      <p>bad</p>
      
      </div>

    </div>
  )
}

export default App