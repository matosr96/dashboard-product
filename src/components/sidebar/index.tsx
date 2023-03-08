import Styles from "./sidebar.module.css"
const Sidebar = () => {
  return (
    <aside className={Styles.sidebar}>
      <div className={Styles.search}>
        <p className='bx bx-search-alt-2'>

        </p>
        <span>Search</span>
      </div>
      <nav className={Styles.nav}>
        <ul className={Styles.lista}>
          <li >
            <a href="#">
              <span className='bx bx-grid-alt'></span>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className='bx bx-user'></span>
              <span>Users</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className='bx bx-message'></span>
              <span>Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className='bx bx-pie-chart-alt-2'></span>
              <span>Analytics</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
