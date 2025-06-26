import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">Projeto 1 - Posts</h1>
      <div className="flex items-center space-x-4">
        {" "}
        {/* Agrupamos os links aqui */}
        <Link
          href="/posts-server"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
        >
          Posts
        </Link>
        <Link
          href="/posts-server/new"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
        >
          New Post
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>                        
            <li>
              <a href="/contatos" className="hover:underline">
                Contatos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
