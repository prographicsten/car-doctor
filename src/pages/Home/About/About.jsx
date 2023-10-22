const About = () => {
  return (
    <div className="hero mt-0 lg:my-10">
      <div className="gap-5 hero-content flex-col-reverse lg:flex-row md:flex-col-reverse xl:p-0">
        <div className="lg:w-1/2 relative mt-5 lg:mt-0 lg:mb-32 md:mb-10">
            <img
            src="https://i.ibb.co/Fwsv112/person.jpg"
            className="-top-5 w-[90%] lg:w-[85%] h-full rounded-lg shadow-2xl"
            />
            <img
            src="https://i.ibb.co/QcqdDCv/parts.jpg"
            className=" w-1/2 border-8 border-white absolute right-5 top-1/2 rounded-lg shadow-2xl"
            />
        </div>
        <div className="lg:w-1/2 space-y-5">
          <h2 className=" text-base md:text-xl text-[#FF3811] font-bold">About Us</h2>
          <h1 className=" md:w-[600px] lg:w-[400px] text-2xl md:text-5xl text-[#151515] font-bold">We are qualified & of experience in this field</h1>
          <p className="text-sm md:text-base capitalize pr-10">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <p className="text-sm md:text-base capitalize pr-10">
          the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  
          </p>
          <button className="bg-[#FF444A] text-white py-3 font-semibold hover:bg-black hover:text-white px-8 rounded-lg">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
