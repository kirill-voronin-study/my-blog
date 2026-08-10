import styles from "./page.module.css";
import LikeWrapper from "./components/like-wrapper";
import CardsLayout from "./components/cards-layout/cards-layout";
import { getPosts } from "@/api/post";

export default async function Home() {
  const cards = await getPosts();

  return (
    <main className={styles.container}>
      <CardsLayout cards={cards} />
      <div className={styles["like-container"]}>
        <LikeWrapper />
      </div>
    </main>
  );
}
