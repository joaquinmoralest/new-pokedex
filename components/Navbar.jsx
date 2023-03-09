import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLogo}>
        <Image src="/img/pokemon-logo.png" alt="pokemon logo" priority={true} width="80" height="80" />
      </div>
      <div className={styles.navLinks}>
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/blog/hello-world">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar