import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import MenuItem from "../../../components/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <div>
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12 ">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="text-[#1F2937] rounded-lg  px-[30px] py-5 border-0 border-b-4 border-[#1F2937] hover:bg-[#1F2937] hover:text-white">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
