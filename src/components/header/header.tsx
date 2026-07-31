import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

function Header() {
  return (
    <div className={styles.container}>
      <span className={styles.logo}>.my_blog</span>
      <Link
        href="https://github.com/kirill-voronin-study/my-blog"
        className={styles.link}
      >
        <Image src="/github.svg" alt="GitHub Link" width={24} height={24} />
      </Link>
    </div>
  );
}

export default Header;
