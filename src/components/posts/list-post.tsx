import { PostProps } from "@/lib/posts";
import Link from "next/link";
import Button from "../button";

export default function PostsList({ posts }: { posts: PostProps[] }) {
  /** TODO: Depois verificar o que será feito com esse button, talvez isso possa virar um componente.
     * <div className="mb-6">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition duration-200"
            onClick={handlePesquisar}
          >
            Pesquisar
          </button>
        </div>
     */

  return (
    <section className="flex flex-col items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl p-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-xl rounded-lg p-6 mb-6 flex flex-col items-center"
          >
            <h1 className="font-bold text-xl mb-2">{post.title}</h1>
            <p className="text-gray-500">{post.body}</p>

            <Link
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
              href={`/posts-server/${post.id}`}
            >
              Ver detalhes
            </Link>
                        
            <Button title="Editar" color="green"/>
            <Button title="Deletar" color="red"/>
          </div>
        ))}
      </div>
    </section>
  );
}
