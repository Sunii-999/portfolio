import Image from "next/image";
import styles from "./Header.module.css";
import Hirono from "../../../public/Hirono.png";

export default function Header() {
  return (
    <div className={`${styles.headerContainer}`}>
      <div className={`${styles.headerFirstSection} ${styles.headerFirstItem}`}>
        <div className={`${styles.headerFirstItem}`}>
          <h1 className={`${styles.headerTitle}`}>SUNII</h1>
          <p>
            Software Engineer | Designer
          </p>
        </div>
        <div className={`${styles.headerCarousel} ${styles.headerFirstItem}`}>
          <p>
            Header
          </p>
        </div>
      </div>
      <div className={`${styles.headerFirstItem} ${styles.headerImageContainer}`}>
      <Image 
        src={Hirono} 
        alt="Hirno figure of me" 
        quality={100}
        fill
        priority
        className={styles.headerImage}
    />
      </div>
    </div>
  );
}
