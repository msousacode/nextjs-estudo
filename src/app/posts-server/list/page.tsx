import { PostProps } from "@/api";
import Link from "next/link";
import Button from "../../../components/button";

export default function PostsList({ posts }: { posts: PostProps[] }) {
  return (
    <section className="flex flex-col items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl p-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-xl rounded-lg p-6 mb-6 flex flex-col"
          >
            <h1 className="font-bold text-xl mb-2">{post.title}</h1>

            <p className="text-gray-500 mb-4">{post.body}</p>

            <div className="flex gap-2 mt-auto">
              <Link
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                href={`/posts-server/${post.id}`}
              >
                Ver detalhes
              </Link>

              <div className="flex gap-2">
                <Button title="Editar" color="green" />
                <Button title="Deletar" color="red" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
