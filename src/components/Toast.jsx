import { useEffect, useState } from 'react'
import Icon from './Icon'

let toastId = 0
const listeners = new Set()

export function showToast(message, type = 'info') {
  const id = ++toastId
  listeners.forEach(fn => fn({ id, message, type }))
}

function ToastContainer() {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const handleToast = (toast) => {
      setToasts(prev => [...prev, toast])
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== toast.id))
      }, 3000)
    }
    listeners.add(handleToast)
    return () => listeners.delete(handleToast)
  }, [])

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div key={toast.id} className={`toast ${toast.type}`}>
          <Icon name={toast.type === 'success' ? 'check' : toast.type === 'error' ? 'error' : 'info'} size={18} />
          {toast.message}
        </div>
      ))}
    </div>
  )
}

export default ToastContainer
