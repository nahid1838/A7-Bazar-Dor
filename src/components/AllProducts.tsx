import getAllProducts from "@/lib/productData";
import ProductCard from "./ProductCard";

const AllProducts = async () => {

    const allProducts = await getAllProducts();

    return (
        <div id="goAll" className="container mx-auto space-y-4 pt-10 pb-25">
            <div className=' flex flex-col items-center sm:items-start '>
                <h3 className='flex items-center gap-1 text-xl sm:text-2xl md:text-3xl font-semibold'>সব পণ্য</h3>
                <p>মোট {allProducts.length}টি পণ্য দেখানো হচ্ছে</p>
            </div>

            <div className="grid grid-cols-1 mx-3 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                {
                    allProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;