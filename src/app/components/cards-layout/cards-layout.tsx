import styles from "./cards-layout.module.css";
import { Card } from "@/components";

const mapper = new Array(6).fill({ length: 5 });

function CardsLayout() {
  return (
    <div className={styles.container}>
      {mapper.map((_, index) => (
        <Card
          key={`card-${index}`}
          img="/grid.png"
          topic="Front-end"
          date="1 месяц назад"
          like={4}
          title="Как работать с CCS Grid"
          content="Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."
          timeToRead="3 минуты"
        />
      ))}
    </div>
  );
}

export default CardsLayout;
