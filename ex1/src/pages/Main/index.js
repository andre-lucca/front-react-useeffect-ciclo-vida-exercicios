import './style.css';
import { Modal } from '../../components/Modal';
import { useState } from 'react';

function Main() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="container">
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <button
        onClick={() => setIsOpen(!isOpen)}
      >Abrir</button>
    </div>
  );
}

export default Main;
