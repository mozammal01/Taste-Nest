import Navigation from "@/components/Home/navigation";
import Banner from "@/components/Home/banner";
import About from "@/components/Home/about";

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
    </div>
  );
}
