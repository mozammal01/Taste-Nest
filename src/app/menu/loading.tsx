import { Loading } from "@/components/ui/loading";

export default function MenuLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <Loading variant="food" size="xl" />
        <h2 className="mt-6 text-xl font-bold text-gray-900">Our Menu</h2>
        <p className="mt-2 text-gray-500">Loading delicious items...</p>
      </div>
    </div>
  );
}
