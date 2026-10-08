import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/lib/productData";

interface IParams {
  categoryId: string;
}

const CategorieProductsPage = async ({
  params,
}: {
  params: Promise<IParams>;
}) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${categoryId}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    return <div>Data not found</div>;
  }

  const categoriProducts: IProduct[] = await res.json();

  return (
    <div className="bg-base-300">
      <div className="container mx-auto py-10 space-y-3 ">
        <div className="flex gap-3 items-center bg-base-100 px-5 py-3 rounded-xl">
            <span className="text-4xl bg-base-300 p-3  rounded-xl">{categoriProducts[0]?.image}</span>
            <div>
                <p className="text-3xl font-bold">{categoriProducts[0]?.nameBn}</p>
                <p>{categoriProducts.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
            </div>
        </div>
        <p>মোট {categoriProducts.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categoriProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorieProductsPage;
