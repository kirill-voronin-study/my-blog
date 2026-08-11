"use client";

import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import { useGithubContext } from "@/context";

function Header() {
  const link = useGithubContext();

  return (
    <div className={styles.container}>
      <span className={styles.logo}>.my_blog</span>
      <Link href={link} className={styles.link} target="_blank">
        <Image src="/github.svg" alt="GitHub Link" width={24} height={24} />
      </Link>
    </div>
  );
}

export default Header;
