import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">My Website</h1>
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
            <a href="/dashboard" className="hover:underline">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/posts-server" className="hover:underline">
              Posts-Server
            </a>
          </li>
          <li>
            <a href="/contatos" className="hover:underline">
              Contatos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
