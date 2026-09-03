import styles from "./page.module.css";
import CardsLayout from "./components/cards-layout/cards-layout";
import { getPosts } from "@/api/post";

export default async function Home() {
  const cards = await getPosts();

  return (
    <main className={styles.container}>
      <CardsLayout cards={cards} />
    </main>
  );
}
