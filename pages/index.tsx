import Banner from "../components/banner";
import Card from "../components/card";
import Navbar from "../components/navbar";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ margin: "0" }}>
        <Navbar title="gallery"></Navbar>
      </div>
      <div>
        <Banner />
      </div>
      <hr />
      <div className={styles.card}>
        <Card />
      </div>
    </div>
  );
}
