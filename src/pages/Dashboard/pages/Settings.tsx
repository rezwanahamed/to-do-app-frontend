import { GitPullRequestArrow } from "lucide-react";
import React from "react";

export default function Settings() {
  return (
    <>
      <div className="wrapper flex h-screen w-full items-center justify-center">
        <div className="group">
          <h2 className="font-geist text-lg">
            Sync your account with google calender
          </h2>
          <button className="mx-auto mt-4 flex cursor-pointer items-center gap-2 rounded-full border px-6 py-2 hover:bg-black hover:text-white duration-300">
            Google sync <GitPullRequestArrow className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  );
}
