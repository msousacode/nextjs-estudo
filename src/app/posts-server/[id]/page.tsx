import { getPostById } from "@/lib/posts";

export default async function DetailPost({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  const detail = await getPostById(id);

  return (
    <section className="flex flex-col items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl p-6">
        <div
          key={detail.id}
          className="bg-white shadow-xl rounded-lg p-6 mb-6 flex flex-col items-center"
        >
          <h1 className="font-bold text-xl mb-2 text-center">{detail.title}</h1>
          <p className="text-gray-500 text-center">{detail.body}</p>
        </div>
      </div>
    </section>
  );
}
