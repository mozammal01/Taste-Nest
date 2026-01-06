import SubTitle from "../shared/subTitle";
import FoodMenu from "./foodMenu";
import FullMenuCategories from "./fullMenuCategories";

export default function Menu() {
  return (
    <div className="container mx-auto">
      <div className="text-center my-12">
        <SubTitle title="Menu" />
      </div>
      <div className="flex justify-center items-center gap-4">
        <FullMenuCategories />
      </div>
      <div>
        <FoodMenu />
      </div>
    </div>
  );
}
