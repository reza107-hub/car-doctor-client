import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="mt-10 lg:mt-36" id="services">
      <p className="text-primary font-bold text-center mb-5">
        Popular Products
      </p>
      <p className="text-4xl font-bold text-center mb-5">Browse Our Products</p>
      <p className="text-neutral text-center mb-5 mx-auto lg:w-[50%]">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which do not look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline btn-primary mt-7">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Products;
