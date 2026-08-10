import { api } from "@/configs/axios";

export async function getPosts() {
  return (await api.get("/posts?_limit=12")).data;
}
