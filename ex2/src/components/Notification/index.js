import styles from './style.module.css'

export function Notification({ setNotifying }) {
  setTimeout(() => {
    setNotifying(false)
  }, 2000)

  return (
    <div className={styles.container}>
      <strong>Novo usuário adicionado!</strong>
    </div>
  )
}