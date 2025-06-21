import { dataFetch } from "../data-fetch";

export async function getPosts(): Promise<PostProps[]> {
  const result = await dataFetch<{ posts: PostProps[] }>({
    verb: "GET",
    path: "posts",
  });

  return result.body.posts.map(
    (post: any) =>
      ({
        id: post.id,
        title: post.title,
        body: post.body,
        userId: post.userId,
      } as PostProps)
  );
}
