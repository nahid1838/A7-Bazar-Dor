import getAllProducts from '@/lib/productData';
import { BiSolidUpArrow } from 'react-icons/bi';
import ProductCard from './ProductCard';

const PriceIncreseToday = async () => {

    const allProducts = await getAllProducts();
    const priceIncreseProducts = allProducts.filter(priceIncreseProduct => priceIncreseProduct.change.dir === "up");

    const sortedPriceIncreseProducts = priceIncreseProducts.sort((a, b) => b.change.pct - a.change.pct);

    return (
        <div className='container mx-auto space-y-4 pt-5'>
            <div className=' flex justify-center sm:justify-start'>
                <h3 className='flex items-center gap-1 text-xl sm:text-2xl md:text-3xl font-semibold'><span className='text-red-500'><BiSolidUpArrow /></span>আজ দাম বেড়েছে</h3>
            </div>

            <div className='grid grid-cols-1 mx-3 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5'>
                {
                    sortedPriceIncreseProducts.slice(0, 6).map(product => 
                    <ProductCard key={product.id} product={product}></ProductCard> )
                }
            </div>
        </div>
    );
};

export default PriceIncreseToday;