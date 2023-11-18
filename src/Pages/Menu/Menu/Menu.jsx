import { Helmet } from "react-helmet";
import Cover from "../../../components/Shared/Cover/Cover";
import menuImg from "../../../assets/menu/menu-bg.jpeg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading="Don't miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        items={dessert}
        title="Dessert"
        img={dessertImg}
      ></MenuCategory>
      {/* pizza  */}
      <MenuCategory
        items={pizza}
        title="Pizza"
        img={pizzaImg}
      ></MenuCategory>
      {/* salad */}
      <MenuCategory
        items={salad}
        title="Salad"
        img={saladBg}
      ></MenuCategory>
      {/* salad */}
      <MenuCategory
        items={soup}
        title="Soups"
        img={soupBg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
