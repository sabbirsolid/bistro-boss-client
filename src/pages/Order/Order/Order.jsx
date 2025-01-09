import Cover from "../../Shared/Cover/Cover";
import orderBg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const [menu] = useMenu();
    const category = useParams()
    console.log(category);
    const dessert = menu?.filter((item) => item.category === "dessert");
    const soup = menu?.filter((item) => item.category === "soup");
    const pizza = menu?.filter((item) => item.category === "pizza");
    const drinks = menu?.filter((item) => item.category === "drinks");
    const salad = menu?.filter((item) => item.category === "salad");
  return (
    <div className="py-5">
      <Cover img={orderBg} title={"Order Now"}></Cover>
      <Tabs>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
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
