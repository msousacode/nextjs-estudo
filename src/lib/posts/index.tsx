import { dataFetch } from "../data-fetch";

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

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

export async function getPostById(id: number): Promise<PostProps> {
  const result = await dataFetch<{ posts: PostProps }>({
    verb: "GET",
    path: `posts/${id}`,
  });

  return {
    id: result.body.id,
    title: result.body.title,
    body: result.body.body,
    userId: result.body.userId,
  } as PostProps;
}

export async function addPost(formData: FormData) {
  const data = {
    title: formData.get("title") as string,    
    userId: 100,
  };

  const result = await dataFetch<{ posts: PostProps }>({
    verb: "POST",
    path: "posts/add",
    _body: data,
  });

  return {
    id: result.body.id,
    title: result.body.title,
    body: result.body.body,
    userId: result.body.userId,
  } as PostProps;
}
