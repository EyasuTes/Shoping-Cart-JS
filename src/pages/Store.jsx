import React from "react";
import items from "../data/items.json";
import StoreItems from "../components/storeItems";
import { useShoppingCart } from "../ShopContext/ShopContext";
export default function Store() {
  const { getCategory, chosenCategory, getCurrentCategory } = useShoppingCart();
  function clickedCategory(cate) {
    chosenCategory(cate);
  }
  console.log(getCurrentCategory());
  return (
    <div className="mt-32">
      <div className="flex justify-center gap-4 ">
        <button
          style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
          onClick={() => clickedCategory()}
          className={` bg-red-500  hover:scale-90 transition-transform duration-300 transform w-52  border-2 border-red-500 ${
            getCurrentCategory() === "" ? "bg-white text-black" : "text-white"
          }`}
        >
          ALL
        </button>
        <button
          style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
          onClick={() => clickedCategory("engine")}
          className={` bg-red-500 hover:scale-90 transition-transform duration-300 transform w-52  border-2 border-red-500 ${
            getCurrentCategory() === "engine"
              ? "bg-white text-black"
              : "text-white"
          }`}
        >
          Engine Category
        </button>
        <button
          style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
          onClick={() => clickedCategory("trans")}
          className={`bg-red-500 hover:scale-90 transition-transform duration-300 transform w-52  border-2 border-red-500 ${
            getCurrentCategory() === "trans"
              ? "bg-white text-black"
              : "text-white"
          }`}
        >
          Transmission Category
        </button>
        <button
          style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
          onClick={() => clickedCategory("mis")}
          className={`bg-red-500  hover:scale-90 transition-transform duration-300 transform w-52  border-2 border-red-500 ${
            getCurrentCategory() === "mis"
              ? "bg-white text-black"
              : "text-white"
          }`}
        >
          Other
        </button>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center  mx-auto mt-8"
        style={{ maxWidth: "80%" }}
      >
        {getCategory().map((item) => (
          <div key={item.id}>
            <StoreItems {...item}></StoreItems>
          </div>
        ))}
      </div>
    </div>
  );
}
