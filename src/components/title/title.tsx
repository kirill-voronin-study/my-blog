import { PropsWithChildren } from "react";
import styles from "./title.module.css";
import clsx from "clsx";

interface TitleProps extends PropsWithChildren {
  tag: 1 | 2 | 3;
}

function Title({ tag, children }: TitleProps) {
  switch (tag) {
    case 1:
      return <h1 className={clsx(styles.title, styles.title1)}>{children}</h1>;
    case 2:
      return <h2 className={clsx(styles.title, styles.title2)}>{children}</h2>;
    case 3:
      return <h3 className={clsx(styles.title, styles.title3)}>{children}</h3>;
    default:
      return <h1 className={clsx(styles.title, styles.title1)}>{children}</h1>;
  }
}

export default Title;
