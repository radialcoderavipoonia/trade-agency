import starterbusinessenterpriseimg from "../assets/images/png/starter_pricing_box.png";
import righticon from "../assets/images/png/righticon.png";
import righticongray from "../assets/images/png/righticongray.png";
import clientstars from "../assets/images/png/5Stars.png";
import california from "../assets/images/png/california.png";
import profileimg1 from "../assets/images/png/customer_img1.png";
import profileimg2 from "../assets/images/png/customer_img2.png";
import profileimg3 from "../assets/images/png/customer_img3.png";
import profileimg4 from "../assets/images/png/customer_img4.png";
import flag from "../assets/images/png/california.png";
import flagGermany from "../assets/images/png/flag_germany.png";
import flagUk from "../assets/images/png/flag_uk.png";
import flagAus from "../assets/images/png/flag_aus.png";
import { VerfiedImg } from "./Icons";
export const Pricing = [
  {
    id: 1,
    imgicon: starterbusinessenterpriseimg,
    heading: "Starter",
    button: "POPULAR PLAN",
    include: "Whats Included :",
    rightimgicon: righticon,
    allbasic: "All basic CRM features",
    contacts: "Up to 10,000 contacts",
    rightimgicongray: righticongray,
    normalsupport: "Normal support",
    mobileapp: "Mobile app",
    dollar: "$99.00",
    spanmonth: "/ Month",
    getstartedbutton: "Get Started",
    nocreditcard: "No credit card required",
  },
  {
    id: 2,
    imgicon: starterbusinessenterpriseimg,
    heading: "Business",
    button: "POPULAR PLAN",
    include: "Whats Included :",
    rightimgicon: righticon,
    allbasic: "All basic CRM features",
    contacts: "Up to 10,000 contacts",
    rightimgicongray: righticongray,
    normalsupport: "Normal support",
    mobileapp: "Mobile app",
    dollar: "$99.00",
    spanmonth: "/ Month",
    getstartedbutton: "Get Started",
    nocreditcard: "No credit card required",
  },
  {
    id: 3,
    imgicon: starterbusinessenterpriseimg,
    heading: "Enterprise",
    button: "POPULAR PLAN",
    include: "Whats Included :",
    rightimgicon: righticon,
    allbasic: "All basic CRM features",
    contacts: "Up to 10,000 contacts",
    rightimgicongray: righticongray,
    normalsupport: "Normal support",
    mobileapp: "Mobile app",
    dollar: "$99.00",
    spanmonth: "/ Month",
    getstartedbutton: "Get Started",
    nocreditcard: "No credit card required",
  },
];
export const Clients = [
  {
    id: 1,
    fivestarts: clientstars,
  },
];
export const Facebook = () => {
  return (
    <svg
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.66667 5.33333H0V8H2.66667V16H6.66667V8H9.09333L9.33333 5.33333H6.66667V4.22267C6.66667 3.58533 6.79467 3.33333 7.41067 3.33333H9.33333V0H6.128C3.73067 0 2.66667 1.056 2.66667 3.07733V5.33333Z"
        fill="white"
      />
    </svg>
  );
};
// our location**********************************************
export const Location = [
  {
    id: 1,
    imgflag: flag,
    paracountryname: "Los Angeles, California",
    textms: "240ms",
  },

  {
    id: 2,
    imgflag: flag,
    paracountryname: "Miami, Florida",
    textms: "180ms",
  },
  {
    id: 3,
    imgflag: flag,
    paracountryname: "Dallas, Texas",
    textms: "240ms",
  },
  {
    id: 4,
    imgflag: flagGermany,
    paracountryname: "Falkenstein, Germany",
    textms: "240ms",
  },
  {
    id: 5,
    imgflag: flagUk,
    paracountryname: "London, UK",
    textms: "240ms",
  },
  {
    id: 6,
    imgflag: flagAus,
    paracountryname: "Sydney, Australia",
    textms: "240ms",
  },
];
export const features = [
  {
    id: 1,
    // featurescardimg: imgna,
  },
];
