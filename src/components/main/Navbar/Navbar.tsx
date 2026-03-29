import { Icon } from "@/components/Icon/Icon";
import styles from "./Navbar.module.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>        
      <div className={`${styles.navbarItemsContainer}`}>
      <ul className={`${styles.navbarItems} ${styles.navSection}`}>
        <li className={styles.navbarItem}>
          Home
        </li>
        <li className={styles.navbarItem}>
          About
        </li>
        <li className={styles.navbarItem}>
          Projects
        </li>
        <li className={styles.navbarItem}>
          Contact
        </li>
      </ul>
      <div className={`${styles.myName} ${styles.navSection}`}> 
      <Icon name="logo" width="32px" height="32px"/>
      </div>
      <div className={`${styles.navbarIconsContainer} ${styles.navSection}`}>
        <GitHubIcon/>
        <LinkedInIcon/>
        <Icon name="mediumIcon" width="24px" height="24px"/>
      </div>
    </div>
    </div>
  );
}
