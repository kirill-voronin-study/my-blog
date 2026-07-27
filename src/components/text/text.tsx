import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import styles from "./text.module.css";

interface TextProps extends ComponentPropsWithoutRef<"p"> {
  size?: "xs" | "s" | "m" | "l";
  color?: "normal" | "light" | "primary";
}

function Text({ size = "m", color = "light", className, children }: TextProps) {
  return (
    <p className={clsx(styles.text, styles[size], styles[color], className)}>
      {children}
    </p>
  );
}

export default Text;
