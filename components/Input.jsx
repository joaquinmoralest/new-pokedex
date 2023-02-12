import styles from '../styles/Input.module.css'

function Input({onChange, onSubmit}) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input type="text" placeholder='Busca un pokemon' onChange={onChange}></input>
      <button>Buscar</button>
    </form>
  )
}

export default Input