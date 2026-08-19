import { getPostById, getPosts } from "@/api";
import { Devider, Like, Text, Title } from "@/components";
import Image from "next/image";
import styles from "./page.module.css";
import LikeWrapper from "./components/like-wrapper";

export async function generateStaticParams() {
  const cards = (await getPosts()).data;

  return cards.map((post) => ({ id: String(post.id) }));
}

async function Page(params: PageProps<"/[id]">) {
  const { id } = await params.params;
  const post = (await getPostById(Number(id))).data;

  return (
    <div className={styles.page}>
      <Title tag={1}>{post.title}</Title>
      <div className={styles.tagsContainer}>
        <Text size="xs">Front-end</Text>
        <Devider />
        <Text size="xs">1 месяц</Text>
        <Devider />
        <Text size="xs">3 минуты</Text>
        <Devider />
        <Like value={4} />
      </div>
      <Image src="/grid.png" alt="Изображение поста" width={667} height={440} />
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
      <LikeWrapper />
    </div>
  );
}

export default Page;
