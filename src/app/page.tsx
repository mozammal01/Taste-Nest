import Navigation from "@/components/Home/navigation";
import Banner from "@/components/Home/banner";
import About from "@/components/Home/about";
import MenuDishes from "@/components/Home/menu&dishes";
import Testimonials from "@/components/Home/testimonials";

export default function Home() {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <About />
      </div>
      <div>
        <MenuDishes />
      </div>
      <div>
        <Testimonials />
      </div>
    </div>
  );
}
