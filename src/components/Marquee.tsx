import getAllProducts from "@/lib/productData";
import Link from "next/link";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi"
import MarqueeText from "react-marquee-text"



const Marquee = async () => {

    const allProducts = await getAllProducts();

    return (
        <div>
            <MarqueeText className="py-1.5" direction={"right"} duration={10}>
            <div className=" flex gap-6">
                {
                    allProducts.map(product => 
                        <Link href={`/product/${product.id}`} className="flex items-center gap-1 hover:underline"
                        key={product.id}>
                            <span>{product.categoryIcon}</span>
                            <p>{product.nameBn}</p>
                            <p>{product.today.toLocaleString("bn-BD")} টাকা/কেজি</p>
                            <span>
                                {product.change.dir === "up" ? 
                                <span className="flex items-center text-red-500"><BiSolidUpArrow /> {product.change.pct.toLocaleString("bn-BD")}%</span>
                             : 
                                <span className="flex items-center text-green-500"><BiSolidDownArrow /> {product.change.pct.toLocaleString("bn-BD")}%</span>
                            }</span>
                        </Link>
                    )
                }
            </div>
            </MarqueeText>
        </div>
    );
};

export default Marquee;