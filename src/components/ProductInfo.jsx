import AddToCart from "./AddToCart";

export default function ProductInfo({
  cartAmount,
  setCartAmount,
  setCartState,
  tempAmount,
  setTempAmount,
}) {
  return (
    <div className="w-[445px] flex flex-col max-w-full">
      <p className="text-[#FF7E1B] font-bold text-[13px] tracking-[2px] uppercase mb-6">
        Sneaker Company
      </p>
      <h1 className="font-bold text-[44px] leading-[48px] text-[#1D2026] mb-8">
        Fall Limited Edition Sneakers
      </h1>
      <p className="leading-[26px] text-[#69707D] mb-6">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex items-center gap-6">
        <h2 className="font-bold text-[28px] text-[#1D2026]">$125.00</h2>
        <p className="px-[10px] py-1 text-[#FF7E1B] bg-[#FFEEE2] font-bold rounded-[6px] pb-1">
          50%
        </p>
      </div>
      <p className="font-bold text-[#B6BCC8] line-through leading-[26px] mb-8">
        $250.00
      </p>
      <AddToCart
        cartAmount={cartAmount}
        setCartAmount={setCartAmount}
        setCartState={setCartState}
        tempAmount={tempAmount}
        setTempAmount={setTempAmount}
      />
    </div>
  );
}
