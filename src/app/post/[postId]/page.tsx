"use client";
/* eslint-disable @next/next/no-img-element */
import { useParams } from "next/navigation";
import { Markdown } from "@/app/components/Markdown";
import { Post } from "@/app/components/PostCard";
import { useEffect, useState } from "react";
import { getPost } from "@/app/actions/getPost";
import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";
import {
  FaCalendar,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
  FaSpinner,
} from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";
import styles from "./page.module.css";

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
    return (
      <main className={styles.spinner}>
        <FaSpinner size={40} />
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.headerContainer}>
        <div className={styles.linksWrapper}>
          <Link href="/" className={styles.link}>
            <MdKeyboardArrowLeft size={20} />
            Go back
          </Link>
          <Link href={post.html_url} target="_blank" className={styles.link}>
            See it on Github <FaExternalLinkAlt size={16} />
          </Link>
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.extraInfoWrapper}>
          <div className={styles.extraInfo}>
            <FaGithub /> {post.user.login}
          </div>
          <div className={styles.extraInfo}>
            <FaCalendar />
            {formatDistanceToNow(new Date(post.created_at), {
              addSuffix: true,
            })}
          </div>
          <div className={styles.extraInfo}>
            <FaComment /> {post.comments}
          </div>
        </div>
      </div>

      <Markdown disallowedElements={["figcaption"]}>{post.body}</Markdown>
    </main>
  );
}
