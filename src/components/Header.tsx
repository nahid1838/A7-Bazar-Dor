import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";
import UserInfo from "./UserInfo";

const Header = () => {
  const date = new Date().toLocaleString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header>
      <div className="container mx-auto flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between items-center py-4">
        <div className="flex gap-3">
          <Link href={"/"} className="bg-green-600 p-2 rounded-xl">
            <Image src={"/logo-icon.png"} alt="Logo" width={35} height={35} />
          </Link>

          <div>
            <h4 className="text-2xl font-bold">বাজার দর</h4>
            <p>{date}</p>
          </div>
        </div>
        
        <UserInfo></UserInfo>

      </div>

      <div>
        <NavLinks></NavLinks>
      </div>
    </header>
  );
};

export default Header;
