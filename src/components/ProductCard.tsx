import { IProduct } from "@/lib/productData";
import { BiSolidUpArrow } from "react-icons/bi";

const ProductCard = ({ product }: {product: IProduct}) => {
  return (
    <div>
      <div className="space-y-3 border border-gray-300 bg-base-100 p-4 rounded-xl">
        <div className="flex gap-4 items-center">
            <span className="text-4xl bg-base-300 p-1 rounded-lg">{product.image}</span>
            <div>
                <p className="text-xl font-bold">{product.nameBn}</p>
                <p>প্রতি কেজি</p>
            </div>
        </div>
        <div  className="flex justify-between items-end">
            <div>
                <p>আজকের দাম</p>
                <p className="text-3xl font-bold">{product.today.toLocaleString("bn-BD")} <span className="text-xl font-semibold">টাকা</span></p>
            </div>
            <p className={`flex items-center gap-0.5 bg-base-300 px-2 py-1 rounded-xl ${product.change.dir === "up" ? "text-red-500" : "text-green-500"}`}><span><BiSolidUpArrow /></span> {product.change.pct.toLocaleString("bn-BD")}%</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
