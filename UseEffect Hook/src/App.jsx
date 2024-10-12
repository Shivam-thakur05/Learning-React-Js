import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const HandleClicked = () => {
    setCount(count + 1)
  }

  //first -> side-effect function
  //second -> cleanup function
  //third -> dependency array

/*
//variation:1, run on every render

  useEffect(() => {
      alert('I am called on every render')
  })  */
  
  /*
  //variation:2, run on first render only
  useEffect(() => {
    alert('I am called on each render')
  }, []) //empty dependency array */

  /*
  //variation:3, run on the every render when count changes
  useEffect(() => {
    alert('I am called on each render')
  }, [count]) */

  /*
  //variation:4, multiple dependencies
  useEffect(() => {
    alert('I am called on each render')
  }, [count, HandleClicked]) */

  /*
  //variation:5, cleanup function
  useEffect(() => {
    alert('I am called on each render')
    return () => {
      alert('I have called for previous render')
    }
  }, [count]) */

  
  return (
    <>
      <h1>UseEffect Hook</h1>
      <button onClick={HandleClicked}>Click me</button>
      <h2>{count}</h2>
    </>
  )
}

export default App
