import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import styles from "./button.module.css";
import { MoveRight } from "lucide-react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  appearance: "primary" | "ghoast";
  arrow?: "right" | "down" | "none";
}

function Button({
  appearance,
  arrow = "none",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, {
        [styles.primary]: appearance === "primary",
        [styles.ghoast]: appearance === "ghoast",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <MoveRight
          size={10}
          className={clsx({
            [styles.right]: arrow === "right",
            [styles.down]: arrow === "down",
          })}
        />
      )}
    </button>
  );
}
export default Button;
