import { Header, Sidebar } from './components'
import Styles from './styles/app.module.css'
function App() {
  return (
    <div className={Styles.contenedor}>
      <Sidebar />

      <Header />

    </div>

  )
}

export default App
