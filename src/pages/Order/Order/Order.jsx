import Cover from "../../Shared/Cover/Cover";
import orderBg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["Salad", "Pizza", "Soup", "Dessert", "Drink"];
  const category = useParams();
  const initialIndex = categories.indexOf(category.category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  console.log(category);
  const [menu] = useMenu();
  console.log(tabIndex, initialIndex);

  const dessert = menu?.filter((item) => item.category === "dessert");
  const soup = menu?.filter((item) => item.category === "soup");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const drinks = menu?.filter((item) => item.category === "drinks");
  const salad = menu?.filter((item) => item.category === "salad");
  return (
    <div className="py-5">
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={orderBg} title={"Order Now"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
