'use client';

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Bounce, toast } from "react-toastify";

const SignUpPage = () => {

  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {name: string, email: string, password: string};

    const {data, error} = await authClient.signUp.email({
      ...user,
      callbackURL: "/"
    })

    if (data) {
      toast.success("আপনার অ্যাকাউন্টটি সফলভাবে তৈরি করা হয়েছে!", {
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

      redirect("/");
    }

    if (error) {
      toast.error(`${error?.message}!`, {
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
    }
    
  }

  const handleGoogleSignIn = async () => {
      const googleData = await authClient.signIn.social({
        provider: "google"
      });
      toast.success("Google সাইন আপ সফল হয়েছে!", {
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
  
    const handleGithubSignIn = async () => {
      const githubData = await authClient.signIn.social({
        provider: "github"
      });
  
      toast.success("Github সাইন আপ সফল হয়েছে!", {
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
    }

  return (
    <div className="min-h-screen bg-base-300 px-4 py-8 sm:py-12">
      <div className="mx-auto flex w-full max-w-md flex-col items-center">
        {/* Header */}
        <div className="mb-6 space-y-2 text-center">
          <h3 className="text-2xl font-bold sm:text-3xl">
            অ্যাকাউন্ট তৈরি করুন
          </h3>

          <p className="text-sm text-gray-600 sm:text-base">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        {/* Sign Up Card */}
        <div className="w-full rounded-2xl border border-gray-300 bg-base-100 p-4 shadow-sm sm:p-6">
          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-4">
            <fieldset className="space-y-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium">
                  নাম
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="যেমন: রহিম উদ্দিন"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium">
                  ইমেইল
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label htmlFor="password" className="text-sm font-medium">
                  পাসওয়ার্ড
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  minLength={8}
                  placeholder="কমপক্ষে ৮ অক্ষর"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn mt-2 w-full border-0 bg-green-600 text-white hover:bg-green-700"
              >
                অ্যাকাউন্ট তৈরি করুন
              </button>
            </fieldset>
          </form>

          {/* Divider */}
          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-300"></div>

            <span className="shrink-0 text-sm text-gray-500">অথবা</span>

            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          {/* Google & GitHub Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Google */}
            <button onClick={handleGoogleSignIn}
              type="button"
              className="btn min-w-0 flex-1 bg-white text-black border-[#e5e5e5] hover:bg-gray-100"
            >
              <svg
                aria-label="Google logo"
                role="img"
                width="18"
                height="18"
                viewBox="0 0 48 48"
                className="shrink-0"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z"
                />
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.74 7.18l7.73 6C44.43 37.98 46.98 31.91 46.98 24.55Z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19Z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.14 1.45-4.89 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z"
                />
              </svg>

              <span className="truncate">Google সাইন আপ</span>
            </button>

            {/* GitHub */}
            <button onClick={handleGithubSignIn}
              type="button"
              className="btn min-w-0 flex-1 border-black bg-black text-white hover:bg-gray-800"
            >
              <svg
                aria-label="GitHub logo"
                role="img"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="shrink-0"
              >
                <path
                  fill="currentColor"
                  d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.35 1.08 2.92.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.58c0 .26.18.57.69.48A10 10 0 0 0 12 2Z"
                />
              </svg>

              <span className="">GitHub সাইন আপ</span>
            </button>
          </div>

          {/* Sign In Link */}
          <p className="mt-5 text-center text-sm text-gray-600">
            আগে থেকেই অ্যাকাউন্ট আছে?{" "}
            <a
              href="/signIn"
              className="font-semibold text-green-700 hover:underline"
            >
              সাইন ইন করুন
            </a>
          </p>
        </div>
        <Link href={"/"}>
          <p className="py-4 text-gray-700 cursor-pointer hover:text-green-400">
            ← হোম পেজে ফিরে যান
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
