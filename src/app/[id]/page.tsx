import { getPostById, getPosts } from "@/api";
import { Card } from "@/components";

export async function generateStaticParams() {
  const cards = (await getPosts()).data;

  return cards.map((post) => ({ id: String(post.id) }));
}

async function Page(params: PageProps<"/[id]">) {
  const { id } = await params.params;
  const post = (await getPostById(Number(id))).data;

  return (
    <div>
      <Card
        id={post.id}
        key={`post-${post.id}`}
        img="/grid.png"
        topic="Front-end"
        date="1 месяц назад"
        like={4}
        title={post.title}
        content={post.body}
        timeToRead="3 минуты"
      />
    </div>
  );
}

export default Page;
