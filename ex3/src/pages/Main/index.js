import { useRef, useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ProductCard } from '../../components/ProductCard';
import { Modal } from '../../components/Modal';

import './style.css';
import logo from '../../assets/logo.svg'
import products from '../../data'

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalsProductRef = useRef({})

  return (
    <div className="back">
      <Header
        logo={logo}
      />
      <main>
        <div className="product-container">
          {products.map(({ id, ...product }) =>
            <ProductCard
              key={id}
              product={product}
              modalsProductRef={modalsProductRef}
              setIsModalOpen={setIsModalOpen}
            />
          )}
        </div>
      </main>
      <Footer
        logo={logo}
        onClick={() => console.log('clicou')}
      />
      <Modal
        isModalOpen={isModalOpen}
        setModal={setIsModalOpen}
        product={modalsProductRef.current}
      />
    </div>
  );
}

export default Main;
