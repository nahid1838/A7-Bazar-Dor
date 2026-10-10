import { IProduct } from "@/lib/productData";
import Link from "next/link";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

const ProductCard = ({ product }: {product: IProduct}) => {

  const unitInBangla: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "টি",
  };

  return (
    <Link href={`/product/${product.id}`} >
      <div className="space-y-3 border border-gray-300 bg-base-100 p-4 rounded-xl">
        <div className="flex gap-4 items-center">
            <span className="text-4xl bg-base-300 p-1 rounded-lg">{product.image}</span>
            <div>
                <p className="text-lg sm:text-xl font-bold">{product.nameBn}</p>
                <p>প্রতি {unitInBangla[product.unit] || product.unit}</p>
            </div>
        </div>
        <div  className="flex justify-between items-end">
            <div>
                <p>আজকের দাম</p>
                <p className=" text-2xl sm:text-3xl font-bold">{product.today.toLocaleString("bn-BD")} <span className="text-xl font-semibold">টাকা</span></p>
            </div>
            <p className={`flex items-center gap-0.5 bg-base-300 px-2 py-1 rounded-xl ${product.change.dir === "up" ? "text-red-500" : "text-green-500"}`}>{product.change.dir === "up" ? <BiSolidUpArrow /> : <BiSolidDownArrow />}<span></span> {product.change.pct.toLocaleString("bn-BD")}%</p>
        </div>
      </div>
    </Link >
  );
};

export default ProductCard;
