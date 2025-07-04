import Link from "next/link";

export default function PaginaComLayout() {
  return (
    <div className="flex flex-col justify-center gap-5 items-center">
      <h1>Conteúdo da página Pai</h1>
      <Link href="/layout/filha" className="botao">
        Ir para a página FILHA
      </Link>
    </div>
  );
}
