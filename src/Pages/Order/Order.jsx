import { useState } from "react";
import orderCover from "../../assets/shop/banner2.jpg";
import Cover from "../../components/Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Order = () => {
  const categories = ["salad", "pizza", "dessert", "soup", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [selectedTab, setSelectedTab] = useState(initialIndex);
  const [menu] = useMenu();
  console.log(category);

  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={orderCover} title={"Order Food"}></Cover>
      <div className="my-8">
        <Tabs
          selectedTab={selectedTab}
          onSelect={(index) => setSelectedTab(index)}
          className="mt-8"
        >
          <TabList className="flex space-x-4 border-b border-gray-300">
            <Tab
              className={`py-2 text-xl font-medium px-4 hover:bg-gray-100 cursor-pointer ${
                selectedTab === 0 ? "border-b-2 border-yellow-500" : ""
              }`}
            >
              Salad
            </Tab>
            <Tab
              className={`py-2 px-4 text-xl font-medium hover:bg-gray-100 cursor-pointer ${
                selectedTab === 1 ? "border-b-2 border-yellow-500" : ""
              }`}
            >
              Pizzas
            </Tab>
            <Tab
              className={`py-2 px-4 text-xl font-medium hover:bg-gray-100 cursor-pointer ${
                selectedTab === 2 ? "border-b-2 border-yellow-500" : ""
              }`}
            >
              Soups
            </Tab>
            <Tab
              className={`py-2 px-4 text-xl font-medium hover:bg-gray-100 cursor-pointer ${
                selectedTab === 3 ? "border-b-2 border-yellow-500" : ""
              }`}
            >
              Desserts
            </Tab>
            <Tab
              className={`py-2 px-4 text-xl font-medium hover:bg-gray-100 cursor-pointer ${
                selectedTab === 4 ? "border-b-2 border-yellow-500" : ""
              }`}
            >
              Drinks
            </Tab>
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
    </div>
  );
};

export default Order;
