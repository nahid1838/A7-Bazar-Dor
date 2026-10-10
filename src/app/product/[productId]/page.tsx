
import { IProduct } from "@/lib/productData";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${productId}`,
  );
  const product: IProduct = await res.json();

  const minPrice = Math.min(...product.markets.map((market) => market.min));
  const maxPrice = Math.max(...product.markets.map((market) => market.max));

  const unitInBangla: Record<string, string> = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "টি",
  };

  return (
    <div className="bg-base-300">
      <div className="container mx-auto w-full space-y-8 px-3 pt-8 pb-15 sm:px-5 lg:px-6">
        <div className="flex flex-col justify-between gap-4 rounded-2xl bg-base-100 px-3 py-4 sm:px-4 md:flex-row md:items-center">
          <div className="flex min-w-0 items-center gap-3 sm:gap-5">
            <span className="shrink-0 rounded-xl bg-base-300 p-3 text-4xl sm:p-4 sm:text-5xl">
              {product.categoryIcon}
            </span>

            <div className="min-w-0">
              <p className="break-words text-2xl font-bold sm:text-3xl">
                {product.nameBn}
              </p>
              <p className="text-sm text-gray-600 sm:text-base">
                প্রতি {unitInBangla[product.unit] || product.unit} - {product.nameBn}
              </p>

              <p className="mt-1 text-sm sm:text-base">
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

          <div className="w-full rounded-xl bg-base-300 px-4 py-2 text-center sm:mx-auto sm:w-fit md:mx-0">
            <p>আজকের দাম</p>
            <p className="text-3xl font-bold">
              {product.today.toLocaleString("bn-BD")}
            </p>
            <p>টাকা / {unitInBangla[product.unit] || product.unit}</p>
            <p
              className={`flex items-center justify-center gap-0.5 rounded-xl px-2 py-1 ${
                product.change.dir === "up"
                  ? "text-red-500"
                  : "text-green-500"
              }`}
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

        <div className="rounded-2xl bg-base-100 px-3 py-6 sm:px-4 md:px-6">
          <div>
            <h3 className="mb-3 mt-6 text-xl font-semibold">
              দামের সারসংক্ষেপ
            </h3>

            <div className="grid grid-cols-1 justify-between gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              <div className="rounded-2xl border border-gray-300 px-4 py-4 sm:px-5">
                <p>সর্বনিম্ন দাম</p>
                <p className="flex flex-wrap items-end gap-1 text-green-500">
                  <span className="text-3xl font-bold">
                    {minPrice.toLocaleString("bn-BD")}
                  </span>
                  টাকা
                </p>
                <p>সবচেয়ে কম দামের বাজার</p>
              </div>

              <div className="rounded-2xl border border-gray-300 px-4 py-4 sm:px-5">
                <p>সর্বাধিক দাম</p>
                <p className="flex flex-wrap items-end gap-1 text-red-500">
                  <span className="text-3xl font-bold">
                    {maxPrice.toLocaleString("bn-BD")}
                  </span>
                  টাকা
                </p>
                <p>সবচেয়ে বেশি দামের বাজার</p>
              </div>

              <div className="rounded-2xl border border-gray-300 px-4 py-4 sm:col-span-2 sm:px-5 lg:col-span-1">
                <p>গড় দাম</p>
                <p className="flex flex-wrap items-end gap-1 text-green-500">
                  <span className="text-3xl font-bold">
                    {((product.today + product.yesterday) / 2).toLocaleString("bn-BD")}
                  </span>
                  টাকা
                </p>
                <p>প্রতি {unitInBangla[product.unit] || product.unit}-এর হিসাবে</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-3 mt-6 text-xl font-semibold">
              বাজারভিত্তিক আজকের দাম
            </h3>

            <div className="overflow-x-auto rounded-xl border border-gray-300">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-5 gap-3 border-b border-gray-300 px-4 py-3 font-semibold text-gray-600">
                  <p>বাজার</p>
                  <p>বিভাগ</p>
                  <p>সর্বনিম্ন</p>
                  <p>সর্বোচ্চ</p>
                  <p className="text-right">গড়</p>
                </div>

                {product.markets.map((market, index) => (
                  <div
                    key={`${market.market}-${index}`}
                    className={`grid grid-cols-5 gap-3 px-4 py-3 ${
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
    </div>
  );
};

export default ProductDetailsPage;
