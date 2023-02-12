import Image from "next/image"
import styles from '../styles/Spinner.module.css'

function Spinner() {
  return (
    <div className={styles.spinner}>
      <Image src="/img/pokeball.png" alt="" width={150} height={150}/>
    </div>
  )
}

export default Spinner