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

  const handleUpdateProfile = async (
    e: React.SubmitEvent<HTMLElement>
  ) => {
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
    <div className="bg-base-300">
      <div className="container mx-auto w-full max-w-[600px] space-y-5 px-4 py-8 sm:px-6 sm:py-10 md:py-15">
        <div>
          <p className="text-2xl font-bold">আমার প্রোফাইল</p>
          <p className="font-semibold text-gray-700">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 rounded-xl bg-base-100 p-4 sm:flex-row sm:items-center sm:p-5">
          <div className="flex min-w-0 w-full items-center gap-3 sm:gap-5">
            <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 text-xl font-bold text-white shadow-sm">
              {user?.name?.trim()?.charAt(0)?.toUpperCase() || "U"}
            </span>

            <div className="min-w-0 flex-1">
              <h3 className="truncate text-xl font-extrabold text-gray-800">
                {user?.name}
              </h3>

              <p className="break-all text-gray-500">
                {user?.email}
              </p>
            </div>
          </div>

          <div
            onClick={handleSignOut}
            className="flex w-fit shrink-0 self-center items-center gap-3 rounded-lg border border-none bg-pink-500 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-red-50 sm:self-start sm:border-solid sm:border-red-600 sm:bg-base-100 sm:text-red-600">
            <span>
              <PiArrowBendDownLeftBold />
            </span>
            সাইন আউট
          </div>
        </div>

        <form
          className="flex w-full items-center justify-center rounded-xl bg-base-100"
          onSubmit={handleUpdateProfile}
        >
          <fieldset className="flex w-full flex-col gap-2 rounded-box p-4 sm:p-5">
            <p className="text-lg font-semibold">তথ্য</p>

            <label className="label text-gray-800">নাম</label>

            <input
              name="name"
              type="text"
              className="input w-full"
              placeholder="Name"
            />

            <button
              type="submit"
              className="btn mx-auto mt-4 w-fit bg-green-700 text-white sm:mx-0 sm:w-full"
            >
              আপডেট
            </button>
          </fieldset>
        </form>

        <Link href={"/"}>
          <p className="cursor-pointer py-4 text-center text-gray-700 hover:text-green-400">
            ← হোম পেজে ফিরে যান
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;