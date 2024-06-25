import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [jokes, setjokes] = useState([])


  useEffect(() => {
    axios.get("/api/jokes")
      .then((response) => {
        setjokes(response.data)
      }).catch((error) => {
        console.log(error)
      })
  })

  return (
    <>
      <h1>Hello this is backend</h1>
      <p>Jokes : {jokes.length}</p>
{
  jokes.map((jokes) => {
    return(
      <div key={jokes.joke}>
        <p>Jokes:{jokes.joke}</p>
        </div>
    )
  })
}

    </>
  )
}

export default App
