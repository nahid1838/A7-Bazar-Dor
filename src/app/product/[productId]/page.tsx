import { IProduct } from "@/lib/productData";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

const ProductDetailsPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const { productId } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${productId}`,
  );
  const product: IProduct = await res.json();

  const minPrice = Math.min(...product.markets.map((market) => market.min));
  const maxPrice = Math.max(...product.markets.map((market) => market.max));

  return (
    <div className="bg-base-300">
      <div className="container mx-auto space-y-8 pt-8 pb-15">
        <div className="flex justify-between items-center px-3 py-4 rounded-2xl bg-base-100">
          <div className="flex gap-5 items-center">
            <span className="text-5xl bg-base-300 p-4 rounded-xl">
              {product.categoryIcon}
            </span>

            <div>
              <p className="text-3xl font-bold">{product.nameBn}</p>
              <p className="text-gray-600">
                প্রতি কেজি - {product.categoryNameBn}
              </p>

              <p>
                {product.change.dir === "up" ? (
                  <>
                    গতকালের তুলনায় আজ দাম বেড়েছে .{" "}
                    {(product.today - product.yesterday).toLocaleString("bn-BD")} টাকা
                  </>
                ) : (
                  <>
                    গতকালের তুলনায় আজ দাম কমেছে .{" "}
                    {(product.yesterday - product.today).toLocaleString("bn-BD")} টাকা
                  </>
                )}
              </p>
            </div>
          </div>
          <div className="text-center bg-base-300 px-4 py-2 rounded-xl">
            <p>আজকের দাম</p>
            <p className="text-3xl font-bold">{product.today.toLocaleString("bn-BD")}</p>
            <p>টাকা / কেজি</p>
            <p
              className={`flex items-center gap-0.5 px-2 py-1 rounded-xl ${product.change.dir === "up" ? "text-red-500" : "text-green-500"}`}
            >
              {product.change.dir === "up" ? (
                <BiSolidUpArrow />
              ) : (
                <BiSolidDownArrow />
              )}
              <span></span> {product.change.pct.toLocaleString("bn-BD")}%
            </p>
          </div>
        </div>

        <div className=" px-4 py-6 bg-base-100 rounded-2xl">
          <div>
              <h3 className="mb-3 mt-6 text-xl font-semibold">দামের সারসংক্ষেপ</h3>
            <div className="grid grid-cols-3 justify-between gap-5">
              <div className="border border-gray-300 px-5 py-4 rounded-2xl">
                <p>সর্বনিম্ন দাম</p>
                <p className="flex gap-1 items-end text-green-500">
                  <span className="text-3xl font-bold">{minPrice.toLocaleString("bn-BD")}</span>টাকা
                </p>
                <p>সবচেয়ে কম দামের বাজার</p>
              </div>

              <div className="border border-gray-300 px-5 py-4 rounded-2xl">
                <p>সর্বাধিক দাম</p>
                <p className="flex gap-1 items-end text-red-500">
                  <span className="text-3xl font-bold">{maxPrice.toLocaleString("bn-BD")}</span>টাকা
                </p>
                <p>সবচেয়ে বেশি দামের বাজার</p>
              </div>

              <div className="border border-gray-300 px-5 py-4 rounded-2xl">
                <p>গড় দাম</p>
                <p className="flex gap-1 items-end text-green-500">
                  <span className="text-3xl font-bold">{((product.today + product.yesterday)/ 2).toLocaleString("bn-BD")}</span>টাকা
                </p>
                <p>প্রতি কেজি-এর হিসাবে</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-3 mt-6 text-xl font-semibold">
              বাজারভিত্তিক আজকের দাম
            </h3>

            <div className=" rounded-xl border border-gray-300">
              <div className="grid min-w-[600px] grid-cols-5 gap-3 border-b border-gray-300 px-4 py-3 font-semibold text-gray-600">
                <p>বাজার</p>
                <p>বিভাগ</p>
                <p>সর্বনিম্ন</p>
                <p>সর্বোচ্চ</p>
                <p className="text-right">গড়</p>
              </div>

              {product.markets.map((market, index) => (
                <div
                  key={`${market.market}-${index}`}
                  className={`grid min-w-[600px] grid-cols-5 gap-3 px-4 py-3 ${
                    index % 2 === 0 ? "bg-base-100" : "bg-base-300"
                  } ${
                    index !== product.markets.length - 1
                      ? "border-b border-gray-500"
                      : ""
                  }`}
                >
                  <p className="font-semibold">{market.market}</p>
                  <p>{market.division}</p>
                  <p>{market.min.toLocaleString("bn-BD")} টাকা</p>
                  <p>{market.max.toLocaleString("bn-BD")} টাকা</p>
                  <p className="text-right font-semibold">
                    {((market.max + market.min) / 2).toLocaleString("bn-BD")}{" "}
                    টাকা
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
