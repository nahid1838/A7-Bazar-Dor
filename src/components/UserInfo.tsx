"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { PiArrowBendDownLeftBold } from "react-icons/pi";
import { Bounce, toast } from "react-toastify";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const [isOpen, setIsOpen] = useState(false);
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();

    toast.success("সফলভাবে সাইন আউট হয়েছে!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <div>
      {user ? (
        <div>
          <div className="relative">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex cursor-pointer items-center gap-3 rounded-full border border-green-200 bg-white py-1.5 pl-1.5 pr-3 shadow-sm transition-all duration-300 hover:border-green-400 hover:bg-green-50 hover:shadow-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-700 text-lg font-bold text-white shadow-sm">
                {user?.name?.trim()?.charAt(0)?.toUpperCase() || "U"}
              </span>

              <span className="max-w-32 truncate text-sm font-semibold text-gray-800">
                {user?.name}
              </span>

              <svg
                className={`h-4 w-4 text-green-700 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </div>

            {isOpen && (
              <div className="absolute right-0 top-full z-50 mt-3 w-60 overflow-hidden rounded-2xl border border-green-100 bg-white shadow-xl">
                {/* Profile Info */}
                <div className="flex items-center gap-3 border-b border-green-100 bg-green-50 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-700 text-lg font-bold text-white">
                    {user?.name?.trim()?.charAt(0)?.toUpperCase() || "U"}
                  </span>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-gray-800">
                      {user?.name}
                    </p>
                    <p className="truncate text-xs text-gray-500">
                      {user?.email}
                    </p>
                  </div>
                </div>

                <div className="space-y-1 p-2">
                  <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-green-50 hover:text-green-700">
                    <span>
                      <FaUser />
                    </span>
                    আমার প্রোফাইল
                  </div>

                  <div
                    onClick={handleSignOut}
                    className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
                  >
                    {" "}
                    <span>
                      <PiArrowBendDownLeftBold />
                    </span>
                    সাইন আউট
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <Link href={"/signIn"}>
            <button className="btn">সাইন ইন</button>
          </Link>
          <Link href={"/signUp"}>
            <button className="btn bg-green-600 text-white">সাইন আপ</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
