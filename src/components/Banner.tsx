import Image from "next/image";

const Banner = () => {
  const date = new Date().toLocaleString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="py-5">
      <div className="container mx-auto flex justify-between items-center bg-white rounded-xl">
        <div className=" px-5 space-y-5">
          <div className="space-y-1">
            <p className="bg-green-100 text-green-500 font-semibold px-3 py-1 rounded-xl w-fit">{date}</p>
            <h1 className="text-4xl font-extrabold">আজকের বাজারের দাম এক নজরে</h1>
          </div>
          <p className="max-w-[500px]">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <a href="#goAll"><button className="btn bg-green-600 text-white">সব পণ্য দেখুন</button></a>
        </div>

        <div>
          <Image
            src={"/bazar-hero.png"}
            alt="Hero Image"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
