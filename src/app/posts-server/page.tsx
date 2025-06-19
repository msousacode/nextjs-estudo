// Server Component é uma funcionalidade do Next.js que permite renderizar componentes no servidor antes de enviá-los ao cliente.

// Por padrão os componentes do Next.js são Server Components, o que significa que eles são renderizados no servidor. 
// Isso permite que você aproveite a renderização do lado do servidor para melhorar o desempenho e a SEO da sua aplicação.

// No server component não se acessa o estado do React, hooks como useState e useEffect não podem ser usados.

interface PostProps {
  id: number;
  title: string;
  body: string;  
  userId: number;
}

interface ResponseProps {
  posts: PostProps[];  
}

export default async function PostsServerComponent() {

    const response = await fetch('https://dummyjson.com/posts');
    const data: ResponseProps = await response.json();

    // Faz a chamada do lado do servidor
    console.log(data)

    return (
        <div className="p-4">
            
        {data.posts.map((post) => (
            <div key={post.id} className="p-4 border-b">
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-gray-700">{post.body}</p>
                <p className="text-sm text-gray-500">User ID: {post.userId}</p>
                </div>
                ))}
        </div>
    );
}


