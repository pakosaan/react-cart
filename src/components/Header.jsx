import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {

  const{cartItems}=useSelector((state)=>state.cart);
  return (
    <nav className="bg-secondary flex justify-between py-0 px-[2rem] ">
      <h2 className="uppercase text-primary">Logo Here.</h2>

      <div className="flex items-center">
        <Link
          className="text-primary text-[1.2rem] my-0 mx-[1rem] [transition:all_0.3s] hover:opacity-50"
          to={"/"}
        >
          Home
        </Link>
        <Link
          className="text-primary text-[1.2rem] my-0 mx-[1rem] [transition:all_0.3s] hover:opacity-50"
          to={"/cart"}
        >
          <FiShoppingBag />
          <p className="absolute bg-tertiary rounded-[50%] h-[15px] w-[15px] [font:900_0.7rem_Roboto] grid place-items-center [transform:translate(80%,-80%)]">
            {cartItems.length}
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
