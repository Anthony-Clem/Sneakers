"use client";

import Header from "@/components/Header";
import Product from "@/components/Product";
import { useState } from "react";

export default function Home() {
  const [cartAmount, setCartAmount] = useState(0);
  const [cartState, setCartState] = useState(false);
  const [tempAmount, setTempAmount] = useState(0);

  return (
    <main className="ml-auto mr-auto max-w-[1110px]">
      <Header
        cartAmount={cartAmount}
        setCartAmount={setCartAmount}
        cartState={cartState}
        setCartState={setCartState}
        tempAmount={tempAmount}
        setTempAmount={setTempAmount}
      />
      <Product
        cartAmount={cartAmount}
        setCartAmount={setCartAmount}
        setCartState={setCartState}
        tempAmount={tempAmount}
        setTempAmount={setTempAmount}
      />
    </main>
  );
}
