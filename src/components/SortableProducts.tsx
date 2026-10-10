"use client";

import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/lib/productData";

type SortOption = "default" | "low-to-high" | "high-to-low";

const SortableProducts = ({ products }: { products: IProduct[] }) => {
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const sortedProducts = [...products];

  if (sortBy === "low-to-high") {
    sortedProducts.sort((a, b) => a.today - b.today);
  } else if (sortBy === "high-to-low") {
    sortedProducts.sort((a, b) => b.today - a.today);
  }

  return (
    <div className="space-y-3">
      {/* Sort Section */}
      <div className="flex items-center justify-end gap-2 rounded-xl border border-gray-200 bg-base-100 px-4 py-3">
        <label
          htmlFor="sort-products"
          className="text-xs text-base-content/60 sm:text-sm"
        >
          সাজান
        </label>

        <div className="relative">
          <select
            id="sort-products"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="w-28 cursor-pointer appearance-none rounded-md border border-gray-300 bg-base-100 py-1.5 pl-2 pr-7 text-xs outline-none transition hover:border-green-600 focus:border-green-600 sm:w-36 sm:text-sm"
          >
            <option value="default">ডিফল্ট</option>
            <option value="low-to-high">দাম: কম থেকে বেশি</option>
            <option value="high-to-low">দাম: বেশি থেকে কম</option>
          </select>

          <BiChevronDown
            size={16}
            className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      {/* Product Count */}
      <p className="text-gray-700 text-center sm:text-start">
        মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
      </p>

      {/* Product Cards */}
      <div className="grid grid-cols-1 gap-3 mx-3 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SortableProducts;
