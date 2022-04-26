import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';


function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <Link to="/"><FaInstagram /></Link>
        </li>
        <li>
          <Link to="/"><FaFacebook /></Link>
        </li>
        <li>
          <Link to="/"><FaLinkedin /></Link>
        </li>
      </ul>
      <p className={styles.copy_right}><span>Costs</span> &copy; 2021</p>
    </footer>
  );
}

export default Footer;
