import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import CartIcon from "./CartIcon";

export default function AddToCart({
  cartAmount,
  setCartAmount,
  setCartState,
  tempAmount,
  setTempAmount,
}) {
  const handleMinus = () => {
    if (tempAmount > 0) {
      setTempAmount(tempAmount - 1);
    }
  };

  const handlePlus = () => {
    setTempAmount(tempAmount + 1);
  };

  const handleAddToCart = () => {
    setCartAmount(tempAmount + cartAmount);
    setCartState(tempAmount > 0);
    localStorage.setItem("temp", tempAmount);
    localStorage.setItem("cart", tempAmount);
    localStorage.setItem("cartState", tempAmount > 0 ? "true" : "false");
  };

  useEffect(() => {
    const storedTemp = parseInt(localStorage.getItem("temp") || 0);
    setTempAmount(storedTemp);

    const storedCart = parseInt(localStorage.getItem("cart") || 0);
    setCartAmount(storedCart);

    const storedCartState = localStorage.getItem("cartState");
    setCartState(storedCartState === "true");
  }, []);

  return (
    <div className="flex items-center gap-4 max-[418px]:flex-col">
      <div className="flex items-center w-[157px] max-[418px]:w-full justify-between bg-[#F6F8FD] rounded-[10px]">
        <button className="px-6 py-[26px]" onClick={handleMinus}>
          <Image src={minus} height={4} width={12} alt="minus icon" />
        </button>
        <p className="font-bold transition">{tempAmount}</p>{" "}
        <button className="px-6 py-[26px]" onClick={handlePlus}>
          <Image src={plus} height={4} width={12} alt="plus icon" />{" "}
        </button>
      </div>
      <button
        className="bg-[#FF7E1B] flex items-center font-bold text-white flex-1 py-5 gap-4 justify-center rounded-[10px] max-[418px]:w-full hover:bg-[#FFAB6A] transition"
        onClick={handleAddToCart}
      >
        <CartIcon fill={"#fff"} width={"17.42"} height={"16"} />
        <p>Add to cart</p>
      </button>
    </div>
  );
}
