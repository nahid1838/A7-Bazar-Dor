import Banner from "@/components/Banner";
import PriceIncreseToday from "@/components/PriceIncreseToday";

export default function Home() {
  return (
    <div className="bg-sky-100">
      <Banner></Banner>
      <PriceIncreseToday></PriceIncreseToday>
    </div>
  );
}
