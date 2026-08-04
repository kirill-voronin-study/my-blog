import styles from "./page.module.css";
import LikeWrapper from "./components/like-wrapper";
import CardsLayout from "./components/cards-layout/cards-layout";

export default function Home() {
  return (
    <main className={styles.container}>
      <CardsLayout />
      <div className={styles["like-container"]}>
        <LikeWrapper />
      </div>
    </main>
  );
}
