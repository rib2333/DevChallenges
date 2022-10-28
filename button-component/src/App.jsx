import styles from './App.module.css'
import {useRoutes} from 'react-router-dom'
import routes from './routes'
import SideBar from './components/Sidebar'
function App() {
  const element = useRoutes(routes)
  return (
    <div className={styles.container}>
      <SideBar/>

      <div className={styles.content}>
        {element}
      </div>
    </div>
  );
}

export default App;
