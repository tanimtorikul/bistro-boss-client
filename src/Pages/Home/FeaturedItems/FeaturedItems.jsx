import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./FeaturedItems.css";
const FeaturedItems = () => {
  return (
    <div className="featured-item bg-cover bg-center  bg-fixed  text-white my-24">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"Featured Items"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center gap-[68px] bg-black bg-opacity-60 pb-20 pt-12 md:px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <p>November 31, 2023</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Indulge in our exquisite dish of the day, featuring a harmonious
            blend of premium ingredients sourced from local farms. Succulent
            flavors, paired with a delicate presentation, make it a perfect
            choice for culinary enthusiasts. Experience a symphony of taste like
            never before.
          </p>
          <button className="btn btn-outline border-0 text-white border-b-4 mt-6">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
