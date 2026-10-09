import Link from "next/link";
import { FaFacebook, FaFacebookMessenger, FaPhoneVolume } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";

const Footer = () => {
    return (
        <div className="pt-5">
            <div className="container mx-auto flex items-center justify-between py-5">
                <div className="space-y-3">
                    <Link href={"/"} className="flex gap-2 items-center">
                        <span className="text-4xl p-1.5 text-gray-200 bg-green-600  rounded-xl"><TiShoppingCart /></span>
                        <p className="text-2xl font-extrabold">বাজার দর</p>
                    </Link>
                    <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
                </div>
                <div className="text-center space-y-1">
                    <p className="text-lg font-bold text-gray-700">যোগাযোগ</p>
                    <div className="flex justify-center gap-5 text-xl">
                        <span className="cursor-pointer"><FaFacebook /></span>
                        <span className="cursor-pointer"><FaFacebookMessenger /></span>
                        <span className="cursor-pointer"><IoLogoWhatsapp /></span>
                        <span className="cursor-pointer"><FaPhoneVolume /></span>
                    </div>
                    <p className="text-gray-600">সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;