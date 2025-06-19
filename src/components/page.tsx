export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">My Website</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
          <li><a href="/posts-server" className="hover:underline">Posts-Server</a></li>
          <li><a href="/posts-client" className="hover:underline">Posts-Client</a></li>
          <li><a href="/contatos" className="hover:underline">Contatos</a></li>
        </ul>
      </nav>
    </header>
  );
}