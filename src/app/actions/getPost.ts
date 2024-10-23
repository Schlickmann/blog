"use server";
import { Post } from "../components/PostCard";
import { fetchWithBaseURL } from "../utils/fetchWithBaseURL";

// Next.js will invalidate the cache when a
// request comes in, at most once every 1h.
const revalidate = 60 * 60; // 1h

export async function getPost({
  repo,
  postId = "",
}: {
  repo: string;
  postId: string;
}): Promise<Post> {
  let data = await fetchWithBaseURL(`repos/${repo}/issues/${postId}`, {
    next: {
      revalidate,
    },
  });
  let post = await data.json();

  return {
    ...post,
  };
}
