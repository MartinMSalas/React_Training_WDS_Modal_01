import { useEffect } from "react"
import { createPortal } from "react-dom"

export function CustomModal({ isOpen, onClose, children } : any) {
  //if (!isOpen) return null
  useEffect(() => {
    function handler(e : any) {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handler)

    return () => {
      document.removeEventListener("keydown", handler)
    }
  }, [onClose])

  return createPortal(
    //<div className={`modal-overlay ${isOpen && "show"} backdrop-blur-sm` } onClick={onClose}>
    <div className={`fixed backdrop-blur-sm transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-80 h-80 bg-gray-900 bg-opacity-50 flex items-center justify-center` } onClick={onClose}>
      <div className="text-red-800">{children}</div>
    </div>,
    document.querySelector("#modal-container") || document.body
  )
}