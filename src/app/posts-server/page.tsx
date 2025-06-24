// Server Component é uma funcionalidade do Next.js que permite renderizar componentes no servidor antes de enviá-los ao cliente.

import PostsList from "@/components/posts/list-post";
import { getPosts, PostProps } from "@/lib/posts";

// Por padrão os componentes do Next.js são Server Components, o que significa que eles são renderizados no servidor.
// Isso permite que você aproveite a renderização do lado do servidor para melhorar o desempenho e a SEO da sua aplicação.

// No server component não se acessa o estado do React, hooks como useState e useEffect não podem ser usados.

export default async function PostsServerComponent() {
  //Trocando essa chamada pela chamada criada na lib/index.tsx
  //import { getPosts } from "@/lib";
  //const response = await fetch("https://dummyjson.com/posts");
  //const data: ResponseProps = await response.json();

  const posts: PostProps[] = await getPosts();

  // Faz a chamada do lado do servidor e imprime os dados no console\terminal do servidor.
  //console.log(data);

  /**
   * No JavaScript (e em React), é comum prefixar funções com handle quando elas são responsáveis por lidar (handle) com eventos, como cliques, mudanças de input, submissão de formulários, etc.
    Exemplo:

    handleClick: lida com o evento de clique.
    handleChange: lida com a mudança de valor em um input.
    Esse padrão deixa o código mais legível e organizado, facilitando a identificação de funções que tratam eventos. Não é obrigatório, mas é uma convenção bastante utilizada na comunidade.
   */
  // Essa função quando anotada com 'use server' é executada no servidor
  /*async function handlePesquisar() {
    "use server";
    console.log("Button clicked!");
  }*/

  //TODO transformar essa section em um componente separado reutilizável
  //TODO tranformar o botão em um componente separado reutilizável
  //TODO criar um component para o loading
  return <PostsList posts={posts} />;
}
