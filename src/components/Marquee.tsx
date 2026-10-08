import getAllProducts from "@/lib/productData";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi"
import MarqueeText from "react-marquee-text"



const Marquee = async () => {

    const allProducts = await getAllProducts();

    return (
        <div>
            <MarqueeText className="py-1.5" direction={"right"} duration={10}>
            <div className=" flex gap-5">
                {
                    allProducts.map(product => 
                        <div className="flex items-center gap-1"
                        key={product.id}>
                            <span>{product.categoryIcon}</span>
                            <p>{product.nameBn}</p>
                            <p>{product.today} টাকা/কেজি</p>
                            <span>
                                {product.change.dir === "up" ? 
                                <span className="flex items-center text-red-500"><BiSolidUpArrow /> {product.change.pct}%</span>
                             : 
                                <span className="flex items-center text-green-500"><BiSolidDownArrow /> {product.change.pct}%</span>
                            }</span>
                        </div>
                    )
                }
            </div>
            </MarqueeText>
        </div>
    );
};

export default Marquee;