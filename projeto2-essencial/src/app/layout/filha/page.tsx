import Link from "next/link";

export default function PaginaFilhaComLayout() {
  return (
    <div className="flex flex-col justify-center gap-5 items-center">
      <h1>Conteúdo da página filha</h1>
      <Link href="/layout" className="botao">
        Voltar
      </Link>
      <Link href="/" className="botao">
        Ínicio
      </Link>
    </div>
  );
}
