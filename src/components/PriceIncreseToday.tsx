import getAllProducts from '@/lib/productData';
import { BiSolidUpArrow } from 'react-icons/bi';

const PriceIncreseToday = async () => {

    const allProducts = await getAllProducts();
    const priceIncreseProducts = allProducts.filter(priceIncreseProduct => priceIncreseProduct.change.dir === "up");

    return (
        <div className='container mx-auto'>
            <p className='flex items-center gap-1 text-xl font-bold'><span className='text-red-500'><BiSolidUpArrow /></span>আজ দাম বেড়েছে</p>

            <div>
                {
                    priceIncreseProducts.map(product => 
                        <div key={product.id}>
                            <p>{product.nameBn}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PriceIncreseToday;