import { GitPullRequestArrow } from "lucide-react";
import React from "react";

export default function Settings() {
  return (
    <>
      <div className="wrapper min-h-screen w-full">
        <div
          className="h-[20rem] w-full rounded-lg bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/2c3a94193040073.65e5af3917618.jpg')",
          }}
        ></div>
        <div className="group mt-10 flex flex-col items-center justify-center">
          <h2 className="font-geist text-lg">
            Sync your account with Google Calendar 
          </h2>
          <p className="mt-2 leading-[20px] md:w-[60%] text-center text-sm font-medium text-gray-500">
            Sync your account with Google Calendar to seamlessly manage
            schedules, events, and reminders in one place. Stay organized, never
            miss important commitments, and access your calendar across all
            devices. Simplify your life and boost productivity with effortless
            integration!
          </p>
          <button className="mt-8 flex cursor-pointer items-center gap-2 rounded-full border px-6 py-2 duration-300 hover:bg-black hover:text-white">
            Google sync <GitPullRequestArrow className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  );
}
