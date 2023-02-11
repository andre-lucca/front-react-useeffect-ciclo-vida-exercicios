import './style.css'

export function Header({ logo }) {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>Moda Masculina</h1>
      <p>SAPATOS SOCIAIS - CASUAIS - ESPORTE FINO</p>
    </header>
  )
}