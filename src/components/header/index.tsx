import { useState } from 'react'
import Styles from './header.module.css'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className={Styles.header}>
        <div className={Styles.menu}>
          <span className='bx bx-menu' onClick={() => setOpen(!open)}></span>
          <h1>Hola Jorge</h1>
        </div>
        <nav className={Styles.nav}>
          <ul className={open ? Styles.active : Styles.noative}>
            <li>
              <span className={`bx bx-menu ${Styles.icon}`} onClick={() => setOpen(!open)}></span>
            </li>
            <li>
              <a href='#'>Inicio</a>
            </li>
            <li>
              <a href='#'>Servicios</a>
            </li>
            <li>
              <a href='#'>Contacto</a>
            </li>
            <li>
              <a href='#'>Acerca de</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
