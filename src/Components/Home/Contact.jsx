const Contact = () => {
  return (
    <div id="contact" className="lg:mt-36 mt-1o">
      <div className="flex flex-wrap lg:flex-nowrap py-5 lg:py-0 justify-center gap-10 px-16 bg-[#151515] md:h-64">
        <div className="flex items-center justify-center w-full md:w-1/3 gap-5">
          <img
            src="https://i.ibb.co/s2Jcmkq/Untitled-1.png"
            alt="Image 1"
            className="w-8 h-8 rounded-full"
          />
          <div className="">
            <h2 className="text-white text-base  mb-2">
              We are open monday-friday
            </h2>
            <p className="text-white text-lg">7:00 am - 9:00 pm</p>
          </div>
        </div>
        <div className="flex items-center lg:justify-center w-full md:w-1/3 gap-5">
          <img
            src="https://i.ibb.co/sH2XRYR/Untitled-2.png"
            alt="Image 2"
            className="w-8 h-8 rounded-full"
          />
          <div className="">
            <h2 className="text-white text-base  mb-2">Have a question?</h2>
            <p className="text-white text-lg">+2546 251 2658</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-1/3 gap-5">
          <img
            src="https://i.ibb.co/QfSP0r0/Untitled-4.png"
            alt="Image 3"
            className="w-8 h-8 rounded-full"
          />
          <div className="">
            <h2 className="text-white text-base  mb-2">Need a repair? our address</h2>
            <p className="text-white text-lg">
            Liza Street, New York
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
