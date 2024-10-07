import dynamic from "next/dynamic";
import Link from "next/link";

import styles from "./styles.module.css";
import { getPosts } from "@/app/actions/getPosts";
// import { Input, Label, TextField } from "react-aria-components";

const PostCard = dynamic(() => import("../PostCard"), { ssr: false });

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
