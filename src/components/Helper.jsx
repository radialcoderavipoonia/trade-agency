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
import imgna from "../assets/images/png/feature_card_img1.png";
import imgenterprise from "../assets/images/png/feature_card_img2.png";
import imgjava from "../assets/images/png/feature_card_img3.png";
import imgcustom from "../assets/images/png/feature_card_img4.png";
import imgscheduled from "../assets/images/png/feature_card_img5.png";
import imgunmetered from "../assets/images/png/feature_card_img6.png";
import imghour from "../assets/images/png/feature_card_img7.png";
import imgfree from "../assets/images/png/feature_card_img8.png";
import imgdiscord from "../assets/images/png/feature_card_img9.png";
import imgcreator from "../assets/images/png/feature_card_img10.png";
import imgbuilt from "../assets/images/png/feature_card_img11.png";
import imgfull from "../assets/images/png/feature_card_img12.png";
import miniimgone from "../assets/images/png/modpack_card_img1.png";
import miniimgtwo from "../assets/images/png/modpack_card_img2.png"
import miniimgthree from "../assets/images/png/modpack_card_img3.png"
import miniimgfour from "../assets/images/png/modpack_card_img4.png"
import miniimgfive from "../assets/images/png/modpack_card_img5.png"
import miniimgsix from "../assets/images/png/modpack_card_img6.png"
import { VerfiedImg } from "./Icons";
import { ArrowImg } from "./Icons";
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
    imgcalifornia: california,
    paracalifornia: "Los Angeles, California",
    textcalifornia: "240ms",
  },
  {
    customerpara:
      "I received great customer service from the specialists who helped me. I would recommend to anyone who wants quality.",
    customersimg: profileimg1,
    customername: "Viola Manisa",
    verifiedcustomer: "Verified customer",
    verified: VerfiedImg,
  },
  {
    id: 1,
    fivestarts: clientstars,
    customerpara:
      "Very responsive and competent! I've never dealt with an insurance company this customer-friendly in my entire life.",
    customersimg: profileimg2,
    customername: "Bryan Arnoldy",
    verifiedcustomer: "Verified customer",
    verified: VerfiedImg,
  },
  {
    id: 1,
    fivestarts: clientstars,
    customerpara:
      "My experience with this platform so far has been great. Everything is easy, from signing the contract to making an appointment.",
    customersimg: profileimg3,
    customername: "Joshua William",
    verifiedcustomer: "Verified customer",
    verified: VerfiedImg,
  },
  {
    id: 1,
    fivestarts: clientstars,
    customerpara:
      "It's the best online insurance you can find. Easy, without hidden costs and you can be very sure. your data is completely save.",
    customersimg: profileimg4,
    customername: "George Scott",
    verifiedcustomer: "Verified customer",
    verified: VerfiedImg,
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
export const Features = [
  {
    id: 1,
    featurescardimg: imgna,
    featurepara: "NA & EU LOCATIONS",
    arrow: ArrowImg,
  },
  {
    id: 2,
    featurescardimg: imgenterprise,
    featurepara: "ENTERPRISE HARDWARE",
    arrow: ArrowImg,
  },
  {
    id: 3,
    featurescardimg: imgjava,
    featurepara: "JAVA 8, 11, 16 & 17 SUPPORT",
    arrow: ArrowImg,
  },
  {
    id: 4,
    featurescardimg: imgcustom,
    featurepara: "CUSTOM GAME CONTROL PANEL",
    arrow: ArrowImg,
  },
  {
    id: 5,
    featurescardimg: imgscheduled,
    featurepara: "SCHEDULED TASKS",
    arrow: ArrowImg,
  },
  {
    id: 6,
    featurescardimg: imgunmetered,
    featurepara: "UNMETERED STORAGE",
    arrow: ArrowImg,
  },
  {
    id: 7,
    featurescardimg: imghour,
    featurepara: "72 HOUR MONEY BACK POLICY",
    arrow: ArrowImg,
  },
  {
    id: 8,
    featurescardimg: imgfree,
    featurepara: "FREE MYSQL DATABASE",
    arrow: ArrowImg,
  },
  {
    id: 9,
    featurescardimg: imgdiscord,
    featurepara: "24/7 DISCORD SUPPORT",
    arrow: ArrowImg,
  },
  {
    id: 10,
    featurescardimg: imgcreator,
    featurepara: "FREE SUBDOMAIN CREATOR",
    arrow: ArrowImg,
  },
  {
    id: 11,
    featurescardimg: imgbuilt,
    featurepara: "BUILT IN FIREWALL MANAGER",
    arrow: ArrowImg,
  },
  {
    id: 12,
    featurescardimg: imgfull,
    featurepara: "FULL FTP ACCESS",
    arrow: ArrowImg,
  },
];
export const Modpack = [
  {
    id: 1,
    minicraftimg: miniimgone,
    headingminicraft: "Minecraft Vanilla",
    recommended: "2 GB recommended",
    paraminicraft:
      "Minecraft Vanilla is the official Minecraft version from Mojang.",
    dollar: "$49.99",
    popular: "Popular",
    official: "Official",
    getstarted: "Get Started",
  },
  {
    id: 2,
    minicraftimg: miniimgtwo,
    headingminicraft: "Minecraft Vanilla",
    recommended: "2 GB recommended",
    paraminicraft:
      "Minecraft Vanilla is the official Minecraft version from Mojang.",
    dollar: "$49.99",
    popular: "Popular",
    official: "Official",
    getstarted: "Get Started",
  },
  {
    id: 3,
    minicraftimg: miniimgthree,
    headingminicraft: "Minecraft Vanilla",
    recommended: "2 GB recommended",
    paraminicraft:
      "Minecraft Vanilla is the official Minecraft version from Mojang.",
    dollar: "$49.99",
    popular: "Popular",
    official: "Official",
    getstarted: "Get Started",
  },
  {
    id: 4,
    minicraftimg: miniimgfour,
    headingminicraft: "Minecraft Vanilla",
    recommended: "2 GB recommended",
    paraminicraft:
      "Minecraft Vanilla is the official Minecraft version from Mojang.",
    dollar: "$49.99",
    popular: "Popular",
    official: "Official",
    getstarted: "Get Started",
  },
  {
    id: 5,
    minicraftimg: miniimgfive,
    headingminicraft: "Minecraft Vanilla",
    recommended: "2 GB recommended",
    paraminicraft:
      "Minecraft Vanilla is the official Minecraft version from Mojang.",
    dollar: "$49.99",
    popular: "Popular",
    official: "Official",
    getstarted: "Get Started",
  },
  {
    id: 6,
    minicraftimg: miniimgsix,
    headingminicraft: "Minecraft Vanilla",
    recommended: "2 GB recommended",
    paraminicraft:
      "Minecraft Vanilla is the official Minecraft version from Mojang.",
    dollar: "$49.99",
    popular: "Popular",
    official: "Official",
    getstarted: "Get Started",
  },
];
