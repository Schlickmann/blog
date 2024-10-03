/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.css";
import { BioInfo } from "../../components/BioInfo";
import { PostsList } from "../../components/PostsList";

export default function PostPage() {
  return (
    <main className={styles.main}>
      {/* <BioInfo /> */}
      <PostsList />
    </main>
  );
}
