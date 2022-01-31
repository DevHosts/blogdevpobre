import styles from "../styles/banner.module.css";
import Camera from "./camera";
import Input from "./inputs";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerRight}>
        <Input />
      </div>
      <div className={styles.bannerLeft}>
        <Camera />
      </div>
    </div>
  );
}
