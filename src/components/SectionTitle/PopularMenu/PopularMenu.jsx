
import SectionTitle from "../SectionTitle";
import MenuItem from "../../../pages/Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
const [menu] = useMenu();
  // console.log(menu);
  const popularMenu = menu?.filter((item) => item.category === "popular");
  return (
    <section >
      <SectionTitle
        heading={"from our menu"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4 my-5">
       { popularMenu?.map(item => (<MenuItem key={item._id} item={item}></MenuItem>) )}
      </div>
    </section>
  );
};

export default PopularMenu;