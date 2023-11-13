import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import MenuItem from "../../../components/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12 md:py-24">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
