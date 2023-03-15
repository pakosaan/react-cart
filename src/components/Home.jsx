import React from "react";
import { toast } from "react-hot-toast";
import {useDispatch} from 'react-redux';
import { addToCart,calculatePrice } from "../redux/actions.js";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

const Home = () => {
  const productList = [
    { name: "MacBook", price: 12000, imgSrc: img1, id: "kanuckjjksjkbvk" },
    { name: "Shoes", price: 1000, imgSrc: img2, id: "kjqhrohenvwldk" },
  ];

  const dispatch=useDispatch();

  const addToCartHandler = (options) => {
    dispatch(addToCart(options));
    toast.success("Added To Cart")
    dispatch(calculatePrice());
  };

  return (
    <div className="flex p-[3rem] justify-center flex-wrap">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="bg-tertiary w-[200px] m-[2rem] rounded-[5px] p-[2rem] flex flex-col items-center [transition:all_0.5s] hover:[scale:1.05]">
    <img className="w-[100%] h-[100%] object-cover" src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4 className="m-[1rem]">${price}</h4>
    <button
      className="cursor-pointer bg-secondary border-none text-tertiary rounded-[5px] [transition:all_0.5s] font-[500] w-[100%] hover:bg-secondarydark"
      onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}
    >
      Add to Cart
    </button>
  </div>
);

export default Home;
