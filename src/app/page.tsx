import Banner from "@/components/Banner";
import PriceIncreseToday from "@/components/PriceIncreseToday";

export default function Home() {
  return (
    <div className="bg-base-300">
      <Banner></Banner>
      <PriceIncreseToday></PriceIncreseToday>
    </div>
  );
}
