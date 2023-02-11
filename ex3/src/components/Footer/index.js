import './style.css'

import faceLogo from '../../assets/facebook.svg'
import instaLogo from '../../assets/instagram.svg'

export function Footer({ logo }) {
  return (
    <footer>
      <div className="left-footer">
        <p>
          <strong>Endereço:</strong>
          <br />
          <br />
          Rua Cubos ,  10 <br />
          Jardim Academy <br />
          Salvador - Bahia - CEP 41820-021
        </p>
        <span>
          <img src={faceLogo} alt="facebook logo" />
          <img src={instaLogo} alt="instagram logo" />
        </span>
      </div>
      <hr />
      <img src={logo} alt="logo" />
    </footer>
  )
}