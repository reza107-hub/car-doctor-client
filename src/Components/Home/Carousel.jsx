/* 
https://i.ibb.co/KXpTBGz/2.jpg
https://i.ibb.co/J2vQFS2/3.jpg
https://i.ibb.co/cx95bZw/4.jpg
https://i.ibb.co/N7H5vbC/1.jpg
*/
const Carousel = () => {
  return (
    <div className="carousel w-full ">
      <div id="slide1" className="carousel-item relative h-[500px] lg:h-[600px] w-full">
        <img src="https://i.ibb.co/KXpTBGz/2.jpg" className="w-full " />
        <div className="absolute md:rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 lg:w-1/2">
            <h2 className="lg:text-6xl text-2xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex transform -translate-y-1/2 right-3 gap-4 bottom-0">
          <a href="#slide4" className="btn btn-circle hover:btn-primary">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle hover:btn-primary">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative h-[500px] lg:h-[600px]  w-full">
        <img src="https://i.ibb.co/J2vQFS2/3.jpg" className="w-full" />
        <div className="absolute md:rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 lg:w-1/2">
            <h2 className="lg:text-6xl text-2xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex transform -translate-y-1/2 right-3 gap-4 bottom-0">
          <a href="#slide1" className="btn btn-circle hover:btn-primary">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle hover:btn-primary">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative h-[500px] lg:h-[600px] w-full">
        <img src="https://i.ibb.co/cx95bZw/4.jpg" className="w-full" />
        <div className="absolute md:rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 lg:w-1/2">
            <h2 className="lg:text-6xl text-2xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex transform -translate-y-1/2 right-3 gap-4 bottom-0">
          <a href="#slide2" className="btn btn-circle hover:btn-primary">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle hover:btn-primary">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative h-[500px] lg:h-[600px] w-full">
        <img src="https://i.ibb.co/N7H5vbC/1.jpg" className="w-full" />
        <div className="absolute md:rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 lg:w-1/2">
            <h2 className="lg:text-6xl text-2xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex transform -translate-y-1/2 right-3 gap-4 bottom-0">
          <a href="#slide3" className="btn btn-circle hover:btn-primary">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle hover:btn-primary">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
