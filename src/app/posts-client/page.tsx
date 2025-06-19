//Esse é o Client Component que renderiza os posts no lado do cliente.
//precisa usar a anotação "use client" para indicar que é um Client Component.
"use client";

import { useEffect, useState } from "react";

//Entrei no mundo do React

//TODO: depois criar uma model e deixar disponível para ser importada em outros componentes. Fazer isso também no component-server de posts.
interface PostProps {
  id: number;
  title: string;
  body: string;  
  userId: number;
}

interface ResponseProps {
  posts: PostProps[];  
}

export default function PostsClientComponent() {
  const [posts, setPosts] = useState([] as PostProps[]);

  // useEffect é um hook do React que permite executar efeitos colaterais em componentes funcionais.
  // Ele é executado após a renderização do componente, permitindo que você faça chamadas assíncronas,
  // manipule o DOM ou execute outras operações que não podem ser feitas diretamente durante a renderização.

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
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

  return (
    <div className="p-4">
      {posts.map((post) => (
        <div key={post.id} className="p-4 border-b">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-gray-700">{post.body}</p>
          <p className="text-sm text-gray-500">User ID: {post.userId}</p>
        </div>
      ))}
    </div>
  );
}
