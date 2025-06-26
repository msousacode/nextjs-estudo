"use server";

import { add } from "@/api";

export default async function createPost(formData: FormData) {
  add({
    title: formData.get("title") as string,
    userId: 1,
  });
}
