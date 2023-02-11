import { useEffect, useRef } from 'react'
import { formatBRL } from '../../utils/formatBRL'

import './style.css'
import closeIcon from '../../assets/close-icon.svg'

export function Modal({ product, isModalOpen, setModal }) {
  const modalRef = useRef(null)

  function openModal() {
    modalRef.current.show()
  }

  function closeModal() {
    modalRef.current.close()
  }

  useEffect(() => {
    if (isModalOpen) {
      openModal()
    }

    return setModal(false)
  }, [isModalOpen])

  return (
    <dialog ref={modalRef}>
      <div className="modal-container">
        <div className="modal-content">
          <img
            className="close-icon"
            src={closeIcon}
            alt="Close modal"
            onClick={closeModal}
          />
          <img className="product-image" src={product.image} alt="" />
          <div className="modal-body">
            <h4>{product.name}</h4>
            <p>{product.description}</p>
          </div>
          <div className="modal-footer">
            <button>Comprar</button>
            <div>
              <span className="old-price">{formatBRL(product.oldPrice)}</span>
              <strong>6x  {formatBRL(product.currentPrice / 6)}</strong>
            </div>
            <div>
              <strong className="current-price">{formatBRL(product.currentPrice)}</strong>
              <span>Sem juros</span>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  )
}