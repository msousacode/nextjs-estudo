import Form from "next/form";
import createPost from "./actions";
import Button from "@/components/button";

export default function NewPost() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Criar um novo Post</h1>
      <Form action={createPost} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="flex text-lg font-medium mb-2 items-center"
          >
            Título
            <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-red-400 rounded-lg">
              Obrigatório
            </span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            placeholder="Digite o seu post"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Criar Post
        </button>        
      </Form>
    </div>
  );
}
