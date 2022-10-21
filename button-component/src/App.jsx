import styles from './App.module.css'
import {useRoutes} from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import routes from './routes'
function App() {
  const element = useRoutes(routes)
  return (
    <div className={styles.container}>
      <div className={styles.nav  + " p-[56.5px] bg-[#FAFBFD] mr-[90px]"}>
      <p>DevChallenges.io</p>
      <div className={styles.box+ " mt-[60px]"}>
      {/* <MyNavLink to="/about">About</MyNavLink>
      <MyNavLink to="/home">Home</MyNavLink> */}
      <MyNavLink to="/colors">Colors</MyNavLink>
      <MyNavLink to="/typography">Typography</MyNavLink>
      <MyNavLink to="/buttons">Buttons</MyNavLink>
      <MyNavLink to="/inputs">Inputs</MyNavLink>
      <MyNavLink to="/grid">Grid</MyNavLink>
      </div>
      </div>

      <div className={styles.content}>
        {element}
      </div>
    </div>
  );
}

export default App;
