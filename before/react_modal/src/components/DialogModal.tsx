import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
/*

export function DialogModal({ isOpen, onClose, children }) {
  const dialogRef = useRef(null)
  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog == null) return

    if (isOpen) {
      dialog.showModal()
    } else {
      dialog.close()
    }
  }, [isOpen])

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog == null) return

    dialog.addEventListener("close", onClose)

    return () => {
      dialog.removeEventListener("close", onClose)
    }
  }, [onClose])

  return createPortal(
    <dialog ref={dialogRef}>{children}</dialog>,
    document.querySelector("#modal-container")
  )

*/
export default function DialogModal({ isOpen, onClose, children }:any) {

 
  
   
  

  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if(dialog === null) return
    if(isOpen){
      dialog.showModal()
    } else {
      dialog.close()
    }
  }, [isOpen]) 
  useEffect(() => {
    const dialog = dialogRef.current
    if(dialog === null) return
    if(isOpen){
      dialog.showModal()
    } else {
      dialog.close()
    }
  }, [isOpen]) 
  
 

  return createPortal(
    <dialog className='border-red-700 border-solid border' ref={dialogRef} onClick={onClose}>{children}</dialog>,
    document.querySelector("#modal-container") || document.body
    
  )
}
