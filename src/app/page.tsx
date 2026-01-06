import Navigation from "@/components/home/navigation";
import Banner from "@/components/home/banner";
import About from "@/components/home/about";
import MenuDishes from "@/components/home/menu&dishes";
import Testimonials from "@/components/home/testimonials";
import OurExperts from "@/components/home/ourExperts";
import News from "@/components/home/news";
import Footer from "@/components/home/footer";
import Ordering from "@/components/home/ordering";
import Categories from "@/components/home/categories";

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
        <Categories />
      </div>
      <div>
        <MenuDishes />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <OurExperts />
      </div>
      <div>
        <Ordering />
      </div>
      <div>
        <News />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
