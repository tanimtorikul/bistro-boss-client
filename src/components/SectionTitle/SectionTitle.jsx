const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="flex flex-col items-center my-12 space-y-3">
      <p className="text-[#D99904] text-lg md:text-[20px]">
        ---{subHeading}---
      </p>
      <p className="border border-[#e3e3e3] w-1/6"></p>
      <p className="uppercase text-2xl md:text-[40px] font-medium">{heading}</p>
      <p className="border border-[#e3e3e3] w-1/6"></p>
    </div>
  );
};

export default SectionTitle;
