import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBanner from '../../../assets/menu/banner3.jpg'
import dessertBg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'
import saladBg from '../../../assets/menu/salad-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu?.filter((item) => item.category === "dessert");
    const soup = menu?.filter((item) => item.category === "soup");
    const pizza = menu?.filter((item) => item.category === "pizza");
    const offered = menu?.filter((item) => item.category === "offered");
    const salad = menu?.filter((item) => item.category === "salad");
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuBanner} title={'our menu'}></Cover>
            {/* offered menu items */}
            <SectionTitle heading={"Today's Offer"} subHeading={"Don't Miss"} ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={dessert} title={'Dessert'} coverImg={dessertBg}></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizza} title={'Pizza'} coverImg={pizzaBg}></MenuCategory>
            {/* salad menu items */}
            <MenuCategory items={salad} title={'Salad'} coverImg={saladBg}></MenuCategory>
            {/* soup menu items */}
            <MenuCategory items={soup} title={'Soup'} coverImg={soupBg}></MenuCategory>
        </div>
    );
};

export default Menu;