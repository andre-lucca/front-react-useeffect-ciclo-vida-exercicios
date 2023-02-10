import './style.css'
import { useEffect } from 'react'

export function Modal({ isOpen, setIsOpen }) {
  useEffect(() => {
    document.querySelector('.modal-card').removeAttribute('hidden')
  }, [])

  return (
    <dialog open={isOpen && true}>
      <div className="modal-card" hidden>
        <h1>Users</h1>
        <ul>
          <li>Andre</li>
          <li>Andre</li>
          <li>Andre</li>
          <li>Andre</li>
        </ul>
        <button
          onClick={() => {
            document.querySelector('.modal-card').setAttribute('hidden', 'true')
            setIsOpen(false)
          }}
        >Fechar</button>
      </div>
    </dialog>
  )
}