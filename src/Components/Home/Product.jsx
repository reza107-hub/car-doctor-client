import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
/* eslint-disable react/prop-types */
const Product = ({ product }) => {
  const { img, product_name, price, ratings } = product;
  return (
    <div className="card  p-6 rounded-md border border-solid border-[#E8E8E8]">
      <figure className="bg-[#F3F3F3]">
        <img className="h-36" src={img} alt="" />
      </figure>
      <div className="card-body items-center mt-5 p-0">
      <Rating
      style={{ maxWidth: 100 }}
      value={ratings}
      readOnly
    />
        <h2 className="card-title font-bold">{product_name}</h2>
        <p className="text-primary font-bold">Price: ${price}</p>
      </div>
    </div>
  );
};

export default Product;
