export default function Button({
  title,
  color,
}: {
  title: string;
  color: string;
}) {
  const colorMap: { [key: string]: string } = {
    blue: "bg-blue-600 hover:bg-blue-700",
    red: "bg-red-600 hover:bg-red-700",
    green: "bg-green-600 hover:bg-green-700",
    // Add more colors as needed
  };

  const selectedColorClasses =
    colorMap[color] || "bg-gray-600 hover:bg-gray-700";

  return (
    <button
      className={`${selectedColorClasses} text-white px-4 py-2 rounded-lg transition`}
    >
      {title}
    </button>
  );
}
