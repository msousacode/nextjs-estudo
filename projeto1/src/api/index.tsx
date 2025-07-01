import { dataFetch } from "../util/data-fetch";

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface NewPost {
  title: string;
  userId: number;
}

export async function getAll(): Promise<PostProps[]> {
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

export async function getById(id: number): Promise<PostProps> {
  const result = await dataFetch<{ posts: PostProps }>({
    verb: "GET",
    path: `posts/${id}`,
  });

  return extractResult(result);
} 



export async function save(newPost: NewPost) {
  const result = await dataFetch<{ posts: PostProps }>({
    verb: "POST",
    path: "posts/add",
    _body: newPost,
  });

  return extractResult(result);
}

function extractResult(result: any): PostProps {
  return {
    id: result.body.id,
    title: result.body.title,
    body: result.body.body,
    userId: result.body.userId,
  } as PostProps;
}
