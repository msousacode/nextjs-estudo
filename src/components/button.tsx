export default function Button({
  title,
  color,
}: {
  title: string;
  color: string;
}) {
  const colorMap: { [key: string]: string } = {
    blue: "bg-blue-500 hover:bg-blue-600",
    red: "bg-red-500 hover:bg-red-600",
    green: "bg-green-500 hover:bg-green-600",
    // Add more colors as needed
  };

  const selectedColorClasses =
    colorMap[color] || "bg-gray-500 hover:bg-gray-600";

  return (
    <button
      className={`${selectedColorClasses} text-white px-4 py-2 rounded-lg transition`}
    >
      {title}
    </button>
  );
}
