import ProductCard from "@/components/ProductCard";
import SortableProducts from "@/components/SortableProducts";
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
      <div className="container mx-auto pt-10 pb-20 space-y-5 ">
        <div className="flex gap-3 items-center bg-base-100 px-5 py-3 rounded-xl">
            <span className="text-4xl bg-base-300 p-3  rounded-xl">{categoriProducts[0]?.image}</span>
            <div>
                <p className="text-3xl font-bold">{categoriProducts[0]?.nameBn}</p>
                <p>{categoriProducts.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
            </div>
        </div>
        <SortableProducts products={categoriProducts}></SortableProducts>
      </div>
    </div>
  );
};

export default CategorieProductsPage;
