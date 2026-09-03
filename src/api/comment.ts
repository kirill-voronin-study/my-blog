import { api } from "@/configs/axios";
import { Comment } from "@/interfaces";

export async function getComments(params: { postId: number }) {
  return (await api.get<Comment[]>("comments", { params })).data;
}
