"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { PiArrowBendDownLeftBold } from "react-icons/pi";
import { Bounce, toast } from "react-toastify";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
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

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
    };

    await authClient.updateUser({
      ...newUserData,
    });

    toast.success("সফলভাবে আপডেট হয়েছে!", {
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
    <div className=" bg-base-300">
      <div className="container mx-auto max-w-150 space-y-5 py-15">
        <div>
          <p className="text-2xl font-bold">আমার প্রোফাইল</p>
          <p className="text-gray-700 font-semibold">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        <div className="flex justify-between items-center bg-base-100 p-5 rounded-xl">
          <div className="flex gap-5 items-center">
            <span className="flex h-13 w-13 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 text-xl font-bold text-white shadow-sm">
              {user?.name?.trim()?.charAt(0)?.toUpperCase() || "U"}
            </span>

            <div>
              <h3 className=" text-xl truncate font-extrabold text-gray-800">
                {user?.name}
              </h3>

              <p className="text-gray-500">{user?.email}</p>
            </div>
          </div>

          <div
            onClick={handleSignOut}
            className="flex cursor-pointer items-center gap-3 border border-red-600 w-fit rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
          >
            {" "}
            <span>
              <PiArrowBendDownLeftBold />
            </span>
            সাইন আউট
          </div>
        </div>

        <form
          className="flex items-center justify-center bg-base-100 rounded-xl"
          onSubmit={handleUpdateProfile}
        >
          <fieldset className=" flex flex-col gap-2 rounded-box w-lg p-4">
            <p className="text-lg font-semibold">তথ্য</p>

            <label className="label text-gray-800">নাম</label>
            <input
              name="name"
              type="name"
              className="input w-s md:w-lg"
              placeholder="Name"
            />

            <button
              type="submit"
              className="btn w-fit mx-auto md:mx-0 bg-green-700 text-white mt-4 md:w-lg"
            >
              আপডেট
            </button>
          </fieldset>
        </form>

        <Link href={"/"}>
          <p className="py-4 text-gray-700 cursor-pointer text-center hover:text-green-400">
            ← হোম পেজে ফিরে যান
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
