import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Design system
      </h1>
      <p>
        Tailwind CSS & React.JS
      </p>
    </>
  )
}

export default App
