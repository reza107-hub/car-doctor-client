const DynamicBanner = ({ children }) => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap lg:py-0 justify-center gap-10 bg-[url('https://i.ibb.co/xsC27Xv/4.jpg')] bg-cover bg-center h-64">
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full text-white flex items-center justify-center lg:justify-start relative">
          <p className="lg:ml-[15%] text-4xl font-bold">{children}</p>
          <p className="bg-primary text-2xl font-medium px-11 py-3 absolute bottom-0 lg:left-[40%]">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DynamicBanner;
