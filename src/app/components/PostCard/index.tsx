import { Markdown } from "../Markdown";
import styles from "./styles.module.css";
import { formatDistanceToNow } from "date-fns";

export interface Post {
  id: number;
  number: number;
  title: string;
  body: string;
  url: string;
  html_url: string;
  created_at: string;
  comments: number;
  labels: {
    name: string;
    color: string;
  }[];
  user: {
    login: string;
  };
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
          {formatDistanceToNow(new Date(post.created_at), {
            addSuffix: true,
          })}
        </span>
      </div>
      <div className={styles.cardBody}>
        <Markdown skipHtml={true} disallowedElements={["h2", "a"]}>
          {post.body}
        </Markdown>
      </div>
    </div>
  );
}

export default PostCard;
