import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Header = () => {
  const date = new Date().toLocaleString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="container mx-auto">
      <div className=" flex justify-between items-center py-4">
        <div className="flex gap-3">
          <Link href={"/"} className="bg-green-600 p-2 rounded-xl">
            <Image src={"/logo-icon.png"} alt="Logo" width={35} height={35} />
          </Link>

          <div>
            <h4 className="text-2xl font-bold">বাজার দর</h4>
            <p>{date}</p>
          </div>
        </div>
        <div>
            <button className="btn">সাইন ইন</button>
            <button className="btn bg-green-600 text-white">সাইন আপ</button>
        </div>
      </div>

      <div>
        <NavLinks></NavLinks>
      </div>
    </header>
  );
};

export default Header;
