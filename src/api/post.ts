import { api } from "@/configs/axios";
import { Post } from "@/interfaces";

export async function getPosts() {
  return await api.get<Post[]>("/posts?_limit=12");
}

export async function getPostById(id: number) {
  return (await api.get<Post>(`/posts/${id}`)).data;
}
