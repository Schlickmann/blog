import { Markdown } from "../Markdown";
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
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>{post.title}</h2>
        <span className={styles.cardDate}>
          {formatDistanceToNow(new Date(post.createdAt), {
            addSuffix: true,
          })}
        </span>
      </div>
      <div className={styles.cardBody}>
        <Markdown skipHtml={true} disallowedElements={["h2"]}>
          {post.body}
        </Markdown>
      </div>
    </div>
  );
}
