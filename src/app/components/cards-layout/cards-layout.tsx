import { Post } from "@/interfaces";
import styles from "./cards-layout.module.css";
import { Card } from "@/components";

function CardsLayout({ cards }: { cards: Post[] }) {
  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <Card
          id={card.id}
          key={`card-${card.id}`}
          img="/grid.png"
          topic="Front-end"
          date="1 месяц назад"
          like={4}
          title={card.title}
          content={card.body}
          timeToRead="3 минуты"
        />
      ))}
    </div>
  );
}

export default CardsLayout;
