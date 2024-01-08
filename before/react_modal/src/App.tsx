import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import DialogModal from './components/DialogModal'
import { CustomModal } from './components/CustomModal'


function App() {
  const [count, setCount] = useState(0)
 
  const [showModalDialog, setShowModalDialog] = useState(false)
  
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false)
  const [isDialogModalOpen, setIsDialogModalOpen] = useState(false)

  return (
    <>    
      <h1>React Modal</h1>
      <button onClick={() => setIsCustomModalOpen(!isCustomModalOpen)}>
        Show Custom Modal
      </button>
      <br />
      <button onClick={() => setIsDialogModalOpen(true)}>
        Show Dialog Modal
      </button>
      {isCustomModalOpen && 
        
        <CustomModal
          isOpen={isCustomModalOpen}
          onClose={() => setIsCustomModalOpen(false)}
        >
          <p>
            This is a <strong>CUSTOM</strong> modal
          </p>
          <button onClick={() => setIsCustomModalOpen(false)}>Close</button>
        </CustomModal>
      }
      <DialogModal
        title="Dialog Title"
        body="Dialog Body"
        footer="Dialog Footer"
        onClose={() => setShowModalDialog(false)}
        isOpen={showModalDialog}
        >
        Test Dialog Modal
      </DialogModal>

      
    </>
  )
}

export default App
