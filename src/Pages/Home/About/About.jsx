import aboutImg from '../../../assets/home/chef-service.jpg';

const About = () => {
  return (
    <div className="relative py-12 md:py-24">
      <div className="">
        <img src={aboutImg} alt="" className="w-full h-96 object-cover" />
      </div>
      <div className="absolute inset-1 md:inset-0 flex items-center justify-center">
        <div className="bg-white text-center p-4 md:p-8 shadow-lg">
          <h2 className="text-2xl md:text-4xl font-bold">BISTRO BOSS</h2>
          <p className="mt-2 md:mt-4">
            Welcome to Bistro Boss, where culinary excellence meets cozy ambiance. Our chefs passionately craft each dish, ensuring a <br />delightful journey for your taste buds. Immerse yourself in a world of flavors, where every bite tells a story.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
