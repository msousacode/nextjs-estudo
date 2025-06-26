"use server";

import { addPost } from "@/lib/posts";

export default async function createPost(formData: FormData) {
  addPost(formData);
}
