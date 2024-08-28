/* eslint-disable @next/next/no-img-element */
import { cache } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaBuilding, FaExternalLinkAlt } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";

import { fetchWithBaseURL } from "@/app/utils/fetchWithBaseURL";
import styles from "./styles.module.css";

const getUserInfo = cache(async (user: string) => {
  let data = await fetchWithBaseURL(`users/${user}`);

  return await data.json();
});

export async function BioInfo() {
  let me = await getUserInfo("schlickmann");

  return (
    <div className={styles.bio}>
      <Image
        src={me.avatar_url}
        alt={`${me.name} avatar`}
        height={148}
        width={148}
        className={styles.avatar}
      />
      <div className={styles.contentWrapper}>
        <div>
          <div className={styles.contentHeader}>
            <h1 className={styles.contentTitle}>{me.name}</h1>
            <Link href={me.html_url} target="_blank" className={styles.link}>
              Github <FaExternalLinkAlt />
            </Link>
          </div>
          <p className={styles.description}>{me.bio}</p>
        </div>
        <div className={styles.extraInfoWrapper}>
          <div className={styles.extraInfo}>
            <FaGithub /> {me.login}
          </div>
          <div className={styles.extraInfo}>
            <FaBuilding /> {me.company}
          </div>
          <div className={styles.extraInfo}>
            <MdPeopleAlt size={20} /> {me.followers}
          </div>
        </div>
      </div>
    </div>
  );
}
