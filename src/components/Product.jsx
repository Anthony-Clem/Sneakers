import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

export default function Product({
  cartAmount,
  setCartAmount,
  setCartState,
  tempAmount,
  setTempAmount,
}) {
  return (
    <div className="flex items-center justify-center gap-[125px] max-[880px]:gap-[50px] max-[788px]:flex-col">
      <ProductImage />
      <ProductInfo
        cartAmount={cartAmount}
        setCartAmount={setCartAmount}
        setCartState={setCartState}
        tempAmount={tempAmount}
        setTempAmount={setTempAmount}
      />
    </div>
  );
}
