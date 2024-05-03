import Image from "next/image";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import menu from "../assets/icon-menu.svg";
import thumbnail1 from "../assets/image-product-1-thumbnail.jpg";
import trash from "../assets/icon-delete.svg";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";

export default function Header({
  cartAmount,
  setCartAmount,
  cartState,
  setCartState,
  setTempAmount,
}) {
  const navItems = ["Collection", "Men", "Women", "About", "Contact"];

  const handleDelete = () => {
    setCartState(false);
    setCartAmount(0);
    setTempAmount(0);
  };
  return (
    <header className="flex items-center justify-between pt-7 pb-[34px] border-b border-[#E4E9F2] max-sm:border-none mb-[90px] max-sm:mb-0">
      <div className="flex items-center gap-14 max-md:gap-5">
        <Image
          src={menu}
          alt="menu"
          width={16}
          height={15}
          className="object-contain hidden max-[780px]:block"
        />
        <Image src={logo} width={138} height={20} alt="logo" />
        <nav className="max-[780px]:hidden">
          <ul className="flex items-center gap-8">
            {navItems.map((navItem, index) => (
              <li
                key={index}
                className="text-[15px] leading-[26px] text-[#69707D] hover:text-[#1D2026] transition cursor-pointer"
              >
                {navItem}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-11 max-sm:gap-5">
        <HoverCard>
          <HoverCardTrigger className="cursor-pointer relative">
            <Image src={cart} alt="cart" height={20} width={22} />
            <p className="absolute right-[-6px] top-[-7px] bg-[#FF7E1B] w-[19px] h-[13px] px-[6px] py-[3px] text-[10px] rounded-full flex items-center justify-center text-white font-bold transition">
              {cartAmount}
            </p>
          </HoverCardTrigger>
          <HoverCardContent className="drop-shadow-lg w-[360px] h-[256px] bg-white mt-[30px] flex flex-col rounded-[10px] z-10">
            <p className="w-full border-b border-[#E4E9F2] p-6 text-[#1D2026] font-bold">
              Cart
            </p>
            <div className="flex-1 flex justify-center items-center w-full p-6 font-bold leading-[26px] text-[#69707D]">
              {cartState && cartAmount > 0 ? (
                <div className="flex flex-col gap-6 items-center justify-between w-full">
                  <div className="flex items-center justify-between w-full">
                    <Image
                      src={thumbnail1}
                      alt="thumbnail image"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="text-[#69707D] font-normal leading-[26px]">
                      <p className="">Fall Limited Edition Sneakers</p>
                      <p className="flex items-center gap-[6px]">
                        $125.00 x {cartAmount}{" "}
                        <span className="text-[#1D2026] font-bold">
                          ${(12500 * cartAmount) / 100}.00
                        </span>
                      </p>
                    </div>
                    <button onClick={handleDelete}>
                      <Image
                        src={trash}
                        alt="trash icon"
                        width={14}
                        height={16}
                        className="cursor-pointer"
                      />
                    </button>
                  </div>
                  <button className="py-5 text-white bg-[#FF7E1B] w-full rounded-[10px]">
                    Checkout
                  </button>
                </div>
              ) : (
                "Your cart is empty."
              )}
            </div>
          </HoverCardContent>
        </HoverCard>
        <div className="w-[50px] h-[50px] rounded-full border-2 transition cursor-pointer border-transparent hover:border-[#FF7E1B]">
          <Image
            src={avatar}
            alt="avatar"
            height={50}
            width={50}
            className=""
          />
        </div>
      </div>
    </header>
  );
}
