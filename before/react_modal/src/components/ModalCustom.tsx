/*
import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const ModalCustom = ({children , onClose, isOpen, title, body,footer}:any) => {
  
  if (!isOpen) return null
  useEffect(() => {
    function handler(e: any){
      if(e.key === 'Escape'){
        onClose()
      }
    }
    document.addEventListener('keydown', handler)
    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [onClose])

  return createPortal(
    <div onClick={onClose} 
      className='fixed backdrop-blur-sm transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-80 h-80 bg-gray-900 bg-opacity-50 flex items-center justify-center'>
        {children}
    </div>,
    document.querySelector("#modal-container") || document.body  
  )
}

export default ModalCustom
*/
import { useEffect } from "react"
import { createPortal } from "react-dom"

export function CustomModal({ isOpen, onClose, children }:any) {
  useEffect(() => {
    function handler(e:any) {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handler)

    return () => {
      document.removeEventListener("keydown", handler)
    }
  }, [onClose])

  return createPortal(
    <div className={`modal-overlay ${isOpen && "show"}`}>
      <div className="modal">{children}</div>
    </div>,
    document.querySelector("#modal-container") || document.body
  )
}