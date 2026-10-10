import Link from "next/link";
import { FaArrowLeft, FaMagnifyingGlass } from "react-icons/fa6";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-base-200 px-4 py-12">
      <div className="w-full max-w-lg rounded-2xl border border-base-300 bg-base-100 px-5 py-10 text-center shadow-sm sm:px-10 sm:py-14">
        {/* 404 Illustration */}
        <div className="relative mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-base-200 sm:h-40 sm:w-40">
          <span className="text-6xl font-extrabold text-primary sm:text-7xl">
            404
          </span>
          <span className="absolute -right-1 -top-1 flex h-12 w-12 items-center justify-center rounded-full bg-base-300 text-2xl sm:h-14 sm:w-14">
            🛒
          </span>
        </div>

        {/* Error Message */}
        <h1 className="mb-3 text-2xl font-bold sm:text-3xl">
          দুঃখিত! পেজটি খুঁজে পাওয়া যায়নি
        </h1>

        <p className="mx-auto mb-8 max-w-sm text-sm leading-7 text-base-content/70 sm:text-base">
          আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে, ঠিকানা পরিবর্তন হয়েছে,
          অথবা পেজটি বর্তমানে উপলব্ধ নেই।
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="btn btn-primary gap-2 rounded-xl"
          >
            <FaArrowLeft />
            হোম পেজে ফিরে যান
          </Link>

          <Link
            href="/"
            className="btn btn-outline gap-2 rounded-xl"
          >
            <FaMagnifyingGlass />
            পণ্য খুঁজুন
          </Link>
        </div>

        <p className="mt-8 text-sm text-base-content/50">
          বাজার দর — সঠিক দামে কেনাকাটার বিশ্বস্ত ঠিকানা
        </p>
      </div>
    </main>
  );
};

export default NotFound;