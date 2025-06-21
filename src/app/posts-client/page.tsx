//Esse é o Client Component que renderiza os posts no lado do cliente.
//precisa usar a anotação "use client" para indicar que é um Client Component.
"use client";

import { getPosts } from "@/lib";
import { useEffect, useState } from "react";

//Entrei no mundo do React

export default function PostsClientComponent() {
  const [posts, setPosts] = useState([] as PostProps[]);

  // useEffect é um hook do React que permite executar efeitos colaterais em componentes funcionais.
  // Ele é executado após a renderização do componente, permitindo que você faça chamadas assíncronas,
  // manipule o DOM ou execute outras operações que não podem ser feitas diretamente durante a renderização.

  useEffect(() => {
    /** 
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));*/

    const data = getPosts();//Usando o server component criado na lib/index.tsx
    data.then((res) => res.json())
        .then((data) => setPosts(data.posts));
  });

  /* Outra forma de fazer a chamada assíncrona usando async/await.
    useEffect(() => {
        const fetchPosts = async () => {
        try {
            const response = await fetch("https://dummyjson.com/posts");
            const data = await response.json();
            setPosts(data.posts);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
        };
    
        fetchPosts();
    }, []);
    */

  // Nesse exemplo a função executa normalmente sempre precisar da anotação "use server",
  // nesse caso executa do lado client e imprime no console do navegador.
  async function handleClick() {
    console.log("Button clicked!");
  }

  return (
    <section className="flex flex-col items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl p-6">
        <div className="mb-6">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition duration-200"
            onClick={handleClick}
          >
            Pesquisar
          </button>
        </div>
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-xl rounded-lg p-6 mb-6 flex flex-col items-center"
          >
            <h1 className="font-bold text-xl mb-2 text-center">{post.title}</h1>
            <p className="text-gray-500 text-center">{post.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
