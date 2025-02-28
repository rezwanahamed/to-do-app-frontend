import Marquee from "react-fast-marquee";
import appLogo1 from "../../../assets/images/logos/1.svg";
import appLogo10 from "../../../assets/images/logos/10.svg";
import appLogo11 from "../../../assets/images/logos/11.svg";
import appLogo12 from "../../../assets/images/logos/12.svg";
import appLogo13 from "../../../assets/images/logos/13.svg";
import appLogo14 from "../../../assets/images/logos/14.svg";
import appLogo15 from "../../../assets/images/logos/15.svg";
import appLogo16 from "../../../assets/images/logos/16.svg";
import appLogo17 from "../../../assets/images/logos/17.svg";
import appLogo18 from "../../../assets/images/logos/18.svg";
import appLogo19 from "../../../assets/images/logos/19.svg";
import appLogo2 from "../../../assets/images/logos/2.svg";
import appLogo20 from "../../../assets/images/logos/20.svg";
import appLogo21 from "../../../assets/images/logos/21.svg";
import appLogo3 from "../../../assets/images/logos/3.svg";
import appLogo4 from "../../../assets/images/logos/4.svg";
import appLogo5 from "../../../assets/images/logos/5.svg";
import appLogo6 from "../../../assets/images/logos/6.svg";
import appLogo7 from "../../../assets/images/logos/7.svg";
import appLogo8 from "../../../assets/images/logos/8.svg";
import appLogo9 from "../../../assets/images/logos/9.svg";


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

export default function MarqueeSection() {
  return (
    <>
      <div className="app-supported-section mt-10 flex w-screen items-center justify-center md:w-[70rem]">
        <Marquee gradient={true} speed={50}>
          <div className="ml-14 flex gap-8 md:gap-14">
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
    </>
  );
}
