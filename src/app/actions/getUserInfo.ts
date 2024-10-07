"use server";
import { fetchWithBaseURL } from "../utils/fetchWithBaseURL";

export async function getUserInfo(user: string) {
  let data = await fetchWithBaseURL(`users/${user}`);

  return await data.json();
}
