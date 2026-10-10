import Image from "next/image";

const Banner = () => {
  const date = new Date().toLocaleString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="py-5">
      <div className="container mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center bg-white rounded-xl">
        <div className=" px-5 space-y-3  md:space-y-5">
          <div className=" space-y-1 mt-5 md:mt-0">
            <div className="flex justify-center sm:justify-start">
              <p className="bg-green-100 text-green-500 font-semibold px-3 py-1 rounded-xl w-fit">{date}</p>
            </div>
            <h1 className="text-2xl text-center sm:text-left sm:text-3xl md:text-4xl font-extrabold">আজকের বাজারের দাম এক নজরে</h1>
          </div>
          <p className="max-w-[500px] text-center sm:text-start">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <div className="text-center sm:text-left sm:mb-5 md:mb-0">
            <a href="#goAll"><button className="btn bg-green-600 text-white">সব পণ্য দেখুন</button></a>
          </div>
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
