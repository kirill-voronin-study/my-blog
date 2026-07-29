import Text from "../text/text";
import { ThumbsUp } from "lucide-react";
import styles from "./like-button.module.css";
import clsx from "clsx";

interface LikeButtonProps {
  isActive?: boolean;
  onClick: () => void;
}

function LikeButton({ isActive = false, onClick }: LikeButtonProps) {
  return (
    <div className={styles.container}>
      <Text color="normal" size="m">
        Понравилось? Жми
      </Text>
      <button
        className={clsx(styles.button, {
          [styles.active]: isActive,
        })}
        onClick={onClick}
      >
        <ThumbsUp />
      </button>
    </div>
  );
}

export default LikeButton;
