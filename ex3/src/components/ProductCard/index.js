import { formatBRL } from '../../utils/formatBRL'

import './style.css'

export function ProductCard({ product, setIsModalOpen, modalsProductRef }) {
  return (
    <div
      className="card"
      onClick={() => {
        setIsModalOpen(true)
        modalsProductRef.current = product
      }}
    >
      <div className="card-head">
        <img src={product.image} alt="" />
      </div>
      <div className="card-body">
        <p>{product.name}</p>
        <p>
          <span className="old-price">
            {formatBRL(product.oldPrice)}
          </span>
          <strong>
            {formatBRL(product.currentPrice)}
          </strong>
        </p>
        <p>
          <b>6x {formatBRL(product.currentPrice / 6)}</b>
          Sem juros
        </p>
      </div>
    </div>
  )
}