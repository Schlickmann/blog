"use server";
import { Post } from "../components/PostCard";
import { fetchWithBaseURL } from "../utils/fetchWithBaseURL";

// Next.js will invalidate the cache when a
// request comes in, at most once every 1h.
const revalidate = 60 * 60; // 1h

interface GetPostsResponse {
  total: number;
  items: Post[];
}

export async function getPosts({
  repo,
  searchString = "",
}: {
  repo: string;
  searchString?: string;
}): Promise<GetPostsResponse> {
  let data = await fetchWithBaseURL(
    `search/issues?q=repo:${repo}%20${searchString}`,
    {
      next: {
        revalidate,
      },
    }
  );
  let posts = await data.json();

  return {
    total: posts.total_count,
    items: posts.items.map((post: any) => ({
      id: post.id,
      number: post.number,
      title: post.title,
      body: post.body,
      url: post.html_url,
      createdAt: post.created_at,
      labels: post.labels.map((label: any) => ({
        name: label.name,
        color: label.color,
      })),
    })),
  };
}
