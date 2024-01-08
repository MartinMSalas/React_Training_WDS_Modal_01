import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import DialogModal from './components/DialogModal'
import { CustomModal } from './components/CustomModal'


function App() {
  const [count, setCount] = useState(0)
  const [showModalCustom, setShowModalCustom] = useState(false)
  const [showModalDialog, setShowModalDialog] = useState(false)
  
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false)
  const [isDialogModalOpen, setIsDialogModalOpen] = useState(false)

  return (
    <>    
      <h1>React Modal</h1>
      <button onClick={() => setIsCustomModalOpen(true)}>
        Show Custom Modal
      </button>
      <button onClick={() => setShowModalDialog(!showModalDialog)}>MODAL DIALOG</button>
      <CustomModal isOpen={isCustomModalOpen} onClose={() => setShowModalCustom(false)}>  
        Modal Data
      </CustomModal>
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
