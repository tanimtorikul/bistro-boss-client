import { Helmet } from "react-helmet";
import Cover from "../../../components/Shared/Cover/Cover";
import menuImg from "../../../assets/menu/menu-bg.jpeg";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
    </div>
  );
};

export default Menu;
