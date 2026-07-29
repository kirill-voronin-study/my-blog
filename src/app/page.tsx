import { Card } from "@/components";
import styles from "./page.module.css";
import LikeWrapper from "./components/like-wrapper";

export default function Home() {
  return (
    <main className={styles.container}>
      <Card
        img="/grid.png"
        topic="Front-end"
        date="1 месяц назад"
        like={4}
        title="Как работать с CCS Grid"
        content="Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."
        timeToRead="3 минуты"
      />
      <LikeWrapper />
    </main>
  );
}
