const About = () => {
  return (
    <div id="about" className="my-44">
      <div className="hero w-full">
        <div className="hero-content justify-between items-start flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/3">
            <p className="font-bold mb-4 text-primary">About Us</p>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
            </p>
            <p className="pb-6">
            the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. 
            </p>
            <button className="btn btn-primary">Get More Info</button>
          </div>
          <div className="card flex-shrink-0 w-1/2 ">
            <div className="card-body p-0">
              <img
                className="h-[550px] w-[90%] relative"
                src="https://i.ibb.co/vdLjXmK/person.jpg"
                alt=""
              />
              <div className="absolute top-[65%] left-[30%]  bg-white p-2">
                <img
                  className="h-1/2 "
                  src="https://i.ibb.co/7tYyqJq/parts.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
