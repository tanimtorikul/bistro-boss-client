const MenuItem = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <div className="flex space-x-4 px-4 md:px-0">
      <img
        className="w-[118px] h-[104px] rounded-tl-none rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px]"
        src={image}
        alt=""
      />
      <div className="space-y-4">
        <h3 className="uppercase text-lg">{name}--------------</h3>
        <p className="text-[#737373]">{recipe}</p>
      </div>
      <p className="text-[#BB8506] text-lg">${price}</p>
    </div>
  );
};

export default MenuItem;
