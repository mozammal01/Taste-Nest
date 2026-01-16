import SubTitle from "../shared/subTitle";
import FoodMenu from "./foodMenu";
import FullMenuCategories from "./fullMenuCategories";
import MenuWrapper from "./MenuWrapper";
import { getMenuItems } from "@/lib/actions/menu";
import { getCurrentUser } from "@/lib/auth";

export default async function Menu() {
  // Fetch menu items and user on the server
  const [menuItems, user] = await Promise.all([getMenuItems(), getCurrentUser()]);

  return (
    <div className="container mx-auto my-32">
      <div className="text-center my-12">
        <SubTitle title="Menu" />
      </div>
      <MenuWrapper>
        <div className="flex justify-center items-center gap-4">
          <FullMenuCategories />
        </div>
        <div>
          <FoodMenu items={menuItems} user={user} />
        </div>
      </MenuWrapper>
    </div>
  );
}
