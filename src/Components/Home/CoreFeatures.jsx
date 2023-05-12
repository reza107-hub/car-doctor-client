import team from '../../assets/group.svg'
import person from '../../assets/person.svg'
import Wrench from '../../assets/Wrench.svg'
import check from '../../assets/check.svg'
import deliveryt from '../../assets/deliveryt.svg'
import Group from '../../assets/Group 38729.svg'
const CoreFeatures = () => {
  return (
    <div className="mt-10 lg:mt-36" id="services">
      <p className="text-primary font-bold text-center mb-5">Core Features</p>
      <p className="text-4xl font-bold text-center mb-5">Why Choose Us</p>
      <p className="text-neutral text-center mb-5 mx-auto lg:w-[50%]">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which do not look even slightly believable.{" "}
      </p>
      <div className="mt-10 flex justify-around flex-wrap md:flex-nowrap gap-6">
        <div className='flex flex-col px-4 py-7 justify-center items-center border border-solid border-[#E8E8E8] hover:bg-primary hover:text-white'>
          <img className='bg-white' src={team} alt="" />
          <p className="card-title font-bold">Expert Team</p>
        </div>
        <div className='flex flex-col px-4 py-7 justify-center items-center border border-solid  border-[#E8E8E8] hover:bg-primary hover:text-white'>
          <img className='bg-primary rounded-full' src={Group} alt="" />
          <p className="card-title font-bold">Timely Delivery</p>
        </div>
        <div className='flex flex-col px-4 py-7 justify-center items-center border border-solid border-[#E8E8E8] hover:bg-primary hover:text-white'>
          <img className='bg-white' src={person} alt="" />
          <p className="card-title font-bold">24/7 Support</p>
        </div>
        <div className='flex flex-col px-4 py-7 justify-center items-center border border-solid border-[#E8E8E8] hover:bg-primary hover:text-white'>
          <img className='bg-white' src={Wrench} alt="" />
          <p className="card-title font-bold">Best Equipment</p>
        </div>
        <div className='flex flex-col px-4 py-7 justify-center items-center border border-solid border-[#E8E8E8] hover:bg-primary hover:text-white'>
          <img  className='bg-white' src={check} alt="" />
          <p className="card-title font-bold">100% Guranty</p>
        </div>
        <div className='flex flex-col px-4 py-7 justify-center items-center border border-solid border-[#E8E8E8] hover:bg-primary hover:text-white'>
          <img className='bg-white' src={deliveryt} alt="" />
          <p className="card-title font-bold">Timely Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
