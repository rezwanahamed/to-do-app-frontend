import Marquee from "react-fast-marquee";
import hero from "./assets/images/hero.svg";
import logo from "./assets/images/logo.svg";
import appLogo1 from "./assets/images/logos/1.svg";
import appLogo10 from "./assets/images/logos/10.svg";
import appLogo11 from "./assets/images/logos/11.svg";
import appLogo12 from "./assets/images/logos/12.svg";
import appLogo13 from "./assets/images/logos/13.svg";
import appLogo14 from "./assets/images/logos/14.svg";
import appLogo15 from "./assets/images/logos/15.svg";
import appLogo16 from "./assets/images/logos/16.svg";
import appLogo17 from "./assets/images/logos/17.svg";
import appLogo18 from "./assets/images/logos/18.svg";
import appLogo19 from "./assets/images/logos/19.svg";
import appLogo2 from "./assets/images/logos/2.svg";
import appLogo20 from "./assets/images/logos/20.svg";
import appLogo21 from "./assets/images/logos/21.svg";
import appLogo3 from "./assets/images/logos/3.svg";
import appLogo4 from "./assets/images/logos/4.svg";
import appLogo5 from "./assets/images/logos/5.svg";
import appLogo6 from "./assets/images/logos/6.svg";
import appLogo7 from "./assets/images/logos/7.svg";
import appLogo8 from "./assets/images/logos/8.svg";
import appLogo9 from "./assets/images/logos/9.svg";

const appLogos = [
  appLogo1,
  appLogo2,
  appLogo3,
  appLogo4,
  appLogo5,
  appLogo6,
  appLogo7,
  appLogo8,
  appLogo9,
  appLogo10,
  appLogo11,
  appLogo12,
  appLogo13,
  appLogo14,
  appLogo15,
  appLogo16,
  appLogo17,
  appLogo18,
  appLogo19,
  appLogo20,
  appLogo21,
];

function LandingPage() {
  return (
    <>
      <div className="nav-section mx-auto flex w-[70rem] items-center justify-between px-10 py-5">
        <div className="left-part w-[20%]">
          <img src={logo} alt="app logo" className="h-auto w-8" />
        </div>
        <div className="mid-part flex w-full items-center justify-center gap-4">
          <a
            className="text-md font-geist text-gray-600 duration-200 hover:text-black"
            href=""
          >
            Home
          </a>
          <a
            href=""
            className="text-md font-geist text-gray-600 duration-200 hover:text-black"
          >
            Pricing
          </a>
          <a
            href=""
            className="text-md font-geist text-gray-600 duration-200 hover:text-black"
          >
            FAQs
          </a>
        </div>
        <div className="right-part w-[20%]">
          <div className="button-group flex gap-2">
            <button className="register-button px</svg>-6 flex cursor-pointer items-center gap-1 rounded-full px-6 py-2.5 text-sm text-black duration-200 hover:bg-black hover:text-white">
              English{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </button>

            <button className="register-button cursor-pointer rounded-full bg-black px-6 py-2.5 text-sm text-white duration-200 hover:bg-blue-500">
              Register
            </button>
          </div>
        </div>
      </div>

      <div className="wrapper mt-[-3rem] flex h-screen w-screen flex-col items-center justify-center">
        <img src={hero} className="h-[20rem] w-[20rem]" alt="task management" />
        <div className="center-content flex w-full items-center justify-center">
          <h2 className="font-europa w-[20%] text-center text-3xl">
            Say <span className="font-europa-italic">Hello</span> to the new era
            on task <span className="font-europa-italic">management</span>{" "}
          </h2>
        </div>
        <p className="font-geist mt-3 w-[25%] text-center text-sm font-[400] tracking-wider text-gray-400">
          Stay organized and boost productivity with TaskFlow – your smart,
          simple, and efficient to-do app.
        </p>

        <button
          type="button"
          className="text-md mt-10 mb-2 flex cursor-pointer items-center justify-center gap-2 rounded-full bg-black px-[3rem] py-3 font-medium text-white duration-200 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 focus:outline-none"
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
        </button>
      </div>

      <div className="wrapper flex flex-col items-center justify-center">
        <div className="app-supported-section mt-10 flex w-[70rem] items-center justify-center">
          <Marquee gradient={true} speed={50}>
            <div className="ml-14 flex gap-14">
              {appLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`app logo ${index + 1}`}
                  className="h-6 w-6"
                />
              ))}
            </div>
          </Marquee>
        </div>

        {/* bento layout */}
        <section className="bento-layout flex items-center gap-2 py-20">
          <div className="grid-row-2 grid gap-2">
            <div className="h-[15rem] w-[30rem] rounded-lg bg-[url('https://cdn.dribbble.com/userupload/14204715/file/original-e64a3775ffa1b9133739774908aadda7.jpg?resize=1504x941&vertical=center')] bg-cover bg-center bg-no-repeat"></div>
            <div className="h-[15rem] w-[30rem] rounded-lg bg-[url('https://cdn.dribbble.com/userupload/14281050/file/original-6838cb6a8800981aa20047b069c0b740.jpg?resize=1504x1128&vertical=center')] bg-cover bg-center bg-no-repeat"></div>
          </div>
          <div className="h-[30rem] w-[30rem] rounded-lg bg-[url('https://cdn.dribbble.com/userupload/14281057/file/original-29e907f29da71d419a3e6b05fc7b7f79.jpg?resize=1504x881&vertical=center')] bg-cover bg-center bg-no-repeat"></div>
        </section>

        <div className="bottom-title w-[50rem] space-y-6 pb-10 text-center">
          <p className="font-europa-italic text-3xl tracking-[2px]">
            Get Things Done, Stress Free.
          </p>
          <p className="font-geist text-xl font-[400] text-gray-400">
            Reduce overwhelm and stay on track with an easy-to-use task manager
            that simplifies your{" "}
            <span className="font-europa-italic tracking-[2px] text-black uppercase">
              workflow
            </span>{" "}
            and helps you accomplish more.
          </p>
        </div>

        {/* google sink */}
        <section className="bento-layout flex w-[60rem] items-start gap-2 py-20">
          <div className="left-part">
            <h2 className="font-geist w-[80%] text-3xl">
              Seamlessly Syncing and Managing Tasks with{" "}
              <span className="font-europa-italic text-4xl tracking-[2px]">
                Google Calendar
              </span>
            </h2>
            <p className="font-geist mt-5 w-[90%] text-xl font-medium text-gray-500">
              Learn how to efficiently organize, schedule, and manage your tasks
              using Google Calendar. This guide covers step-by-step instructions
              for creating, editing, and syncing tasks, setting reminders, and
              optimizing your workflow for better productivity. Whether
              you`&apos`re managing personal to-dos or team projects, discover
              the best practices to stay on track and never miss a deadline.
            </p>
            <button
              type="button"
              className="text-md mt-10 mb-2 flex cursor-pointer items-center justify-center gap-2 rounded-full bg-black px-[3rem] py-3 font-medium text-white duration-200 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 focus:outline-none"
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
            </button>
          </div>
          <div className="grid-row-2 right-part grid gap-2">
            <div className="h-[15rem] w-[30rem] rounded-lg bg-[url('https://cdn.dribbble.com/userupload/6328768/file/original-214105244de5be232951a75ed696373d.jpg?resize=1504x1127&vertical=center')] bg-cover bg-center bg-no-repeat"></div>
            <div className="h-[15rem] w-[30rem] rounded-lg bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/5bb2d5175456361.651189053fbec.jpg')] bg-cover bg-center bg-no-repeat"></div>
          </div>
        </section>
      </div>

      <footer className="mx-auto w-screen bg-gray-100 py-24">
        <div className="wrapper mx-auto flex w-[70rem] items-start justify-between">
          <div className="left-part">
            <p className="font-europa-italic text-5xl">Start your journey </p>
          </div>
          <div className="right-part w-[80%]">
            <div className="footer-content mx-auto flex justify-between px-10 text-sm">
              <div className="link-section space-y-3">
                <h3 className="font-geist font-medium text-base">
                  Product
                </h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Integrations
                    </a>
                  </li>
                </ul>
              </div>

              <div className="link-section space-y-3">
                <h3 className="font-geist font-medium text-base">
                  Resources
                </h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>

              <div className="link-section space-y-3">
                <h3 className="font-geist font-medium text-base">
                  Company
                </h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="link-section space-y-3">
                <h3 className="font-geist font-medium text-base">
                  Support
                </h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Live Chat
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Report an Issue
                    </a>
                  </li>
                </ul>
              </div>

              <div className="link-section space-y-3">
                <h3 className="font-geist font-medium text-base">
                  Community
                </h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Forum
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Contribute
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
