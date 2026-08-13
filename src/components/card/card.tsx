import Image from "next/image";
import styles from "./card.module.css";
import { Button, Like, Text, Title } from "@/components";
import Link from "next/link";

interface CardProps {
  id: number;
  img: string;
  topic: string;
  date: string;
  like: number;
  title: string;
  content: string;
  timeToRead: string;
}

function Card({
  id,
  img,
  topic,
  date,
  like,
  title,
  content,
  timeToRead,
}: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <Image src={img} alt="Изображение карточки" width={300} height={192} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <div className={styles.contentTags}>
            <Text size="xs" color="normal">
              {topic}
            </Text>
            <Text size="xs">·</Text>
            <Text size="xs" color="light">
              {date}
            </Text>
          </div>
          <Like value={like} />
        </div>
        <Title tag={3}>{title}</Title>
        <Text size="s">{content}</Text>
      </div>
      <div className={styles.footer}>
        <Text size="xs">{timeToRead}</Text>
        <Link href={`/${id}`}>
          <Button appearance="ghoast" arrow="right">
            Читать
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
