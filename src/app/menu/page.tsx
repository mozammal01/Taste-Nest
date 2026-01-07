import Navigation from "@/components/home/navigation";
import Menu from "@/components/menu";
import { Suspense } from "react";

export default function MenuPage() {
  return (
    <>
      <Navigation />
      <div>
        <Suspense fallback={<div className="container mx-auto my-32 text-center">Loading menu...</div>}>
          <Menu />
        </Suspense>
      </div>
    </>
  );
}
