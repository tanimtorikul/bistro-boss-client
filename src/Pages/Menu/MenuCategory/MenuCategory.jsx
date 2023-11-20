import { Link } from "react-router-dom";
import MenuItem from "../../../components/MenuItem/MenuItem";
import Cover from "../../../components/Shared/Cover/Cover";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to={`/order/${title}`}
          className="text-[#1F2937] rounded-lg  px-[30px] py-5 border-0 border-b-4 border-[#1F2937] hover:bg-[#1F2937] hover:text-white"
        >
          Order Your Favorite Food
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
