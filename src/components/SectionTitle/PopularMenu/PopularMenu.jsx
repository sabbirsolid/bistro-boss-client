import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import MenuItem from "../../../pages/Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("../../../../public/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data?.filter((item) => item.category === "popular");
        setMenu(popularMenu);
      });
  }, []);
  console.log(menu);
  return (
    <section >
      <SectionTitle
        heading={"from our menu"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4 my-5">
       { menu?.map(item => (<MenuItem key={item._id} item={item}></MenuItem>) )}
      </div>
    </section>
  );
};

export default PopularMenu;
