// Server Component é uma funcionalidade do Next.js que permite renderizar componentes no servidor antes de enviá-los ao cliente.

import { getPosts } from "@/lib";

// Por padrão os componentes do Next.js são Server Components, o que significa que eles são renderizados no servidor.
// Isso permite que você aproveite a renderização do lado do servidor para melhorar o desempenho e a SEO da sua aplicação.

// No server component não se acessa o estado do React, hooks como useState e useEffect não podem ser usados.

export default async function PostsServerComponent() {
  
  //Trocando essa chamada pela chamada criada na lib/index.tsx
  //import { getPosts } from "@/lib";
  //const response = await fetch("https://dummyjson.com/posts");
  //const data: ResponseProps = await response.json();

  const data: ResponseProps = await getPosts();
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
  async function handleClick() {
    "use server";
    console.log("Button clicked!");
  }

  //TODO transformar essa section em um componente separado reutilizável
  //TODO tranformar o botão em um componente separado reutilizável
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
        {data.posts.map((post) => (
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
