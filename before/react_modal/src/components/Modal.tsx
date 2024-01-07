import React from 'react'

const Modal = (params:any) => {
  const { title, body, footer, onClose } = params
  return (
    <div onClick={onClose} className='text-red-600 po flex'>
      <div>{title}</div>
      <div>{body}</div>
      <div>{footer}</div>


    </div>
  )
}

export default Modal