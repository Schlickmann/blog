"use client";
import dynamic from "next/dynamic";
import Link from "next/link";

import styles from "./styles.module.css";
import { getPosts } from "@/app/actions/getPosts";
import { Search } from "../Search";
import { useEffect, useState } from "react";
import { Post } from "../PostCard";

const PostCard = dynamic(() => import("../PostCard"), { ssr: false });

export function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      let response = await getPosts({
        repo: "schlickmann/blog",
        searchString,
      });
      setPosts(response.items);
    }

    fetchPosts();
  }, [searchString]);

  if (posts.length === 0) {
    return (
      <div>
        <Search onSearch={setSearchString} />
        <p>No posts found.</p>
      </div>
    );
  }

  return (
    <div>
      <Search onSearch={setSearchString} />
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
