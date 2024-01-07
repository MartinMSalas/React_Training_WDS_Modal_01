import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [count, setCount] = useState(0)
  const [showModal, setShowModal] = useState(false)

  
  return (
    <>    
      <h1>React Modal</h1>
      <button onClick={() => setShowModal(!showModal)}>MODAL</button>
      {showModal &&      
        <Modal  
          title="Modal Title"
          body="Modal Body"
          footer="Modal Footer"
          onClose={() => setShowModal(false)}
        />
      }
    </>
  )
}

export default App
