import { Link } from "react-router-dom";
import appRoutes from "../../../../lib/config/route";

export default function GoogleBento() {
  return (
    <>
      <section className="google-bento-layout grid w-screen grid-cols-1 items-start gap-2 px-4 py-20 md:flex md:w-[70rem]">
        <div className="left-part order-2 md:order-1">
          <h2 className="font-geist text-center text-3xl md:w-[80%] md:text-left">
            Seamlessly Syncing and Managing Tasks with{" "}
            <span className="font-europa-italic text-4xl tracking-[2px]">
              Google Calendar
            </span>
          </h2>
          <p className="mt-5 text-center text-xl font-medium text-gray-400 md:w-[90%] md:text-left">
            Learn how to efficiently organize, schedule, and manage your tasks
            using Google Calendar. This guide covers step-by-step instructions
            for creating, editing, and syncing tasks, setting reminders, and
            optimizing your workflow for better productivity. Whether
            you`&apos`re managing personal to-dos or team projects, discover the
            best practices to stay on track and never miss a deadline.
          </p>
          <Link
            to={appRoutes.register}
            type="button"
            className="text-md mx-auto mt-8 mb-15 flex w-max cursor-pointer items-center justify-center gap-2 rounded-full bg-black px-[3rem] py-3 font-medium text-white duration-200 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 focus:outline-none md:mx-0 md:mb-2"
          >
            Get started{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </Link>
        </div>
        <div className="md:grid-row-2 right-part order-1 mb-10 grid gap-2 md:order-2 md:mb-0">
          <div className="h-[15rem] w-full rounded-lg bg-[url('https://cdn.dribbble.com/userupload/6328768/file/original-214105244de5be232951a75ed696373d.jpg?resize=1504x1127&vertical=center')] bg-cover bg-center bg-no-repeat md:w-[30rem]"></div>
          <div className="h-[15rem] w-full rounded-lg bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/5bb2d5175456361.651189053fbec.jpg')] bg-cover bg-center bg-no-repeat md:w-[30rem]"></div>
        </div>
      </section>
    </>
  );
}
