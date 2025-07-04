import obterProdutos from "@/data/service/obterProdutos";

export default async function PaginaProdutos() {
  const produtos = await obterProdutos();
  return (
    <div>
      {produtos.map((produto) => (
        <div key={produto.id}>{produto.nome}</div>
      ))}
    </div>
  );
}
