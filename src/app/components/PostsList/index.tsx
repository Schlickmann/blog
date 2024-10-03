import dynamic from "next/dynamic";
import Link from "next/link";

import { fetchWithBaseURL } from "@/app/utils/fetchWithBaseURL";
import { Post } from "../PostCard";
import styles from "./styles.module.css";
// import { Input, Label, TextField } from "react-aria-components";

const PostCard = dynamic(() => import("../PostCard"), { ssr: false });

// Next.js will invalidate the cache when a
// request comes in, at most once every 1h.
export const revalidate = 60 * 60; // 1h

interface GetPostsResponse {
  total: number;
  items: Post[];
}

async function getPosts({
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

export async function PostsList() {
  let response = await getPosts({
    repo: "schlickmann/blog",
  });
  let posts = response.items;

  if (posts.length === 0) {
    return <div>No posts found</div>;
  }

  return (
    <div>
      {/* <TextField>
        <Label>First name</Label>
        <Input />
      </TextField> */}
      <div className={styles.postListWrapper}>
        {posts.map((post) => (
          <Link href={`/post/${post.number}`} key={post.number}>
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
}
