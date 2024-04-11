export function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="border p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-semibold text-blue-600 mb-4">{title}</h1>
      <div className="text-gray-800">{children}</div>
    </div>
  );
}
