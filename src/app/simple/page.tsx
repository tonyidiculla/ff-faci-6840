export default function SimplePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Simple Facility Page</h1>
      <p>This page should render with basic styling.</p>
      <div className="mt-4 p-4 bg-blue-100 rounded">
        <p>If you can see this styled box, Tailwind is working.</p>
      </div>
    </div>
  );
}