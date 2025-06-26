//Esse loading é para todo o componente
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid mb-4"></div>
        <span className="text-gray-700 text-lg font-semibold">Carregando...</span>
      </div>
    </div>
  );
}
