//Esse é o Client Component que renderiza os posts no lado do cliente.
//precisa usar a anotação "use client" para indicar que é um Client Component.
"use client";

import PostsList from "@/components/posts/list-post";
import { getPostById, getPosts, PostProps } from "@/lib/posts";
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

    getPosts().then((res) => setPosts(res)); //Usando o server component criado na lib/index.tsx
  }, []); //É necessário passar um array vazio como segundo argumento para que o useEffect seja executado apenas uma vez, após a montagem do componente. Se não tiver esse array, fica chamando infinitamente o endpoint.

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
  async function handlePesquisar(id: number) {
    getPostById(id).then((res) => setPosts(res ? [res] : [])); //Nesse caso se retornar algum post ele será adicionado ao estado posts, caso contrário, o estado será vazio.
  }

  async function handlePesquisarV1() {
    getPostById(1).then((res) => setPosts(res ? [res] : [])); //Nesse caso se retornar algum post ele será adicionado ao estado posts, caso contrário, o estado será vazio.
  }

  return <PostsList posts={posts} />;
}
