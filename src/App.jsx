import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  // Step 1: Create state variables for `joke` and `loading`
  const [joke, setJoke] = useState("")
  const [loading, setLoading] = useState(false)

  // Step 3: Define a function that fetches a programming joke
  const fetchJoke = () => {
    setLoading(true)

    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then(res => res.json())
      .then(data => {
        setJoke(data.joke)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }

  // Step 2: Fetch a joke when the component mounts
  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <div className="app">
      <h1>Programming Jokes</h1>

      {/* Step 4: Pass the necessary props to JokeDisplay */}
      <JokeDisplay joke={joke} loading={loading} />

      {/* Step 5: Pass the function to FetchButton */}
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  )
}

export default App
