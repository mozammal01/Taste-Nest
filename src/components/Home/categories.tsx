import PopularMenu from "../popularMenu/popularMenu";
import SubTitle from "../shared/subTitle";

export default function Categories() {
  return (
    <div>
      <div className="text-center my-12">
        <SubTitle title="Popular Menu" />
      </div>
      <PopularMenu />
    </div>
  );
}
