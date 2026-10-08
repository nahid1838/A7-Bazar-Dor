import getAllProducts from "@/lib/productData";
import ProductCard from "./ProductCard";

const AllProducts = async () => {

    const allProducts = await getAllProducts();

    return (
        <div id="goAll" className="container mx-auto space-y-4 pt-10">
            <div>
                <h3 className='flex items-center gap-1 text-3xl font-semibold'>সব পণ্য</h3>
                <p>মোট {allProducts.length}টি পণ্য দেখানো হচ্ছে</p>
            </div>

            <div className="grid grid-cols-3 gap-5">
                {
                    allProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;