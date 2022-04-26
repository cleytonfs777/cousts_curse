import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton';

function Home() {
  return (
    <session className={styles.home_container}>
      <h1>
        Bem-Vindo ao <span>Costs</span>
      </h1>
      <p>Começe a gerenciar seu projeto agora mesmo!</p>
      <LinkButton to="/newproject" text="Crie seu projeto" />
      <img src={savings} alt="minha imagem" />
    </session>
  );
}

export default Home;
