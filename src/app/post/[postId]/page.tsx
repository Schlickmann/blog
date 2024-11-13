"use client";
/* eslint-disable @next/next/no-img-element */
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import { Markdown } from "@/app/components/Markdown";
import { Post } from "@/app/components/PostCard";
import { useEffect, useState } from "react";
import { getPost } from "@/app/actions/getPost";

export default function PostPage() {
  const params = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    async function fetchPost() {
      let response = await getPost({
        repo: "schlickmann/blog",
        postId: params.postId,
      });
      setPost(response);
    }

    fetchPost();
  }, [params.postId]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <main className={styles.main}>
      <Markdown disallowedElements={["figcaption"]}>{post.body}</Markdown>
    </main>
  );
}
