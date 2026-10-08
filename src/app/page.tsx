import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import PriceDicreaseToday from "@/components/PriceDicreaseToday";
import PriceIncreseToday from "@/components/PriceIncreseToday";

export default function Home() {
  return (
    <div className="bg-base-300">
      <Banner></Banner>
      <PriceIncreseToday></PriceIncreseToday>
      <PriceDicreaseToday></PriceDicreaseToday>
      <AllProducts></AllProducts>
    </div>
  );
}
