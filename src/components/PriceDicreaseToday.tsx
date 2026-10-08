import getAllProducts from '@/lib/productData';
import { BiSolidDownArrow } from 'react-icons/bi';
import ProductCard from './ProductCard';

const PriceDicreaseToday = async () => {

    const allProducts = await getAllProducts();
    const priceDicreaseProducts = allProducts.filter(priceDicreseProduct => priceDicreseProduct.change.dir === "down");

    const sortedPriceIncreseProducts = priceDicreaseProducts.sort((a, b) => a.change.pct - b.change.pct);

    return (
        <div className='container mx-auto space-y-4 pt-10'>
            <h3 className='flex items-center gap-1 text-3xl font-semibold'><span className='text-green-500'><BiSolidDownArrow /></span>আজ দাম কমেছে</h3>

            <div className='grid grid-cols-3 gap-5'>
                {
                    sortedPriceIncreseProducts.slice(0, 6).map(product => 
                    <ProductCard key={product.id} product={product}></ProductCard> )
                }
            </div>
        </div>
    );
};

export default PriceDicreaseToday;