import { Text, Devider } from "@/components";
import styles from "./comment.module.css";

interface CommentProps {
  name: string;
  email: string;
  content: string;
}

export default function Comment({ name, email, content }: CommentProps) {
  return (
    <div>
      <div className={styles.tagsContainer}>
        <span className={styles.name}>{name}</span>
        <Devider />
        <span className={styles.email}>{email}</span>
      </div>
      <Text color="normal">{content}</Text>
    </div>
  );
}
