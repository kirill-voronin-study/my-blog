import { ThumbsUp } from "lucide-react";
import styles from "./like.module.css";
import Text from "../text/text";

interface LikeProps {
  value: number;
}

function Like({ value }: LikeProps) {
  return (
    <div className={styles.container}>
      <Text size="xs">{value}</Text>
      <ThumbsUp size={16} />
    </div>
  );
}

export default Like;
