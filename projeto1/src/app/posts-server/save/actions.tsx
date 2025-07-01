"use server";

import { save } from "@/api";

export default async function savePost(formData: FormData) {
  save({
    title: formData.get("title") as string,
    userId: 1,
  });
}
