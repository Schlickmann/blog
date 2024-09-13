import styles from "./styles.module.css";
import { formatDistanceToNow } from "date-fns";

export interface Post {
  id: number;
  title: string;
  body: string;
  url: string;
  createdAt: string;
  labels: {
    name: string;
    color: string;
  }[];
}

interface PostProps {
  post: Post;
}

export function PostCard({ post }: PostProps) {
  return (
    <div className={styles.cardWrapper}>
      <h2 className={styles.cardTitle}>{post.title}</h2>
      <span>
        {formatDistanceToNow(new Date(post.createdAt), {
          addSuffix: true,
        })}
      </span>
      <p className={styles.cardBody}>{post.body}</p>
    </div>
  );
}
