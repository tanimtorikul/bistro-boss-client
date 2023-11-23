import useAuth from "../../../hooks/useAuth";

const FoodCard = ({ item }) => {
  const { image, price, name, recipe } = item;
  const { user } = useAuth();
  const handleAddToCart = (food) => {
    console.log(food);
  };
  return (
    <div className="card w-[370px] bg-[#F3F3F3] relative">
      <figure>
        <img src={image} alt="image" className="object-cover" />
      </figure>
      <p className="bg-[#111827] py-[11px] px-[23px] text-white flex justify-center items-center text-sm absolute right-4 top-4">
        ${price}
      </p>
      <div className="card-body text-center">
        <h2 className="text-xl text-semibold text-black text-center">{name}</h2>
        <p className="text-[#737373]">{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="rounded-lg  px-[30px] py-5 bg-[#E8E8E8] border-0 border-b-4 border-[#BB8506] hover:bg-[#1F2937] text-[#BB8506]"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
