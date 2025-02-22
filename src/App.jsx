// import "./App.css";
// import { gsap } from "gsap";
// import { Navbar } from "./components";
// import { useGSAP } from "@gsap/react";
// import circle from "./assets/circle.png";
// import { useEffect, useRef } from "react";
// import { useTranslation } from "react-i18next";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(useGSAP);
// gsap.registerPlugin(ScrollTrigger);

// function App() {
//  const [t] = useTranslation("general");

//  const refSm = useRef(null);
//  const containerSm = useRef();
//  const refM = useRef(null);
//  const containerM = useRef();

//  useEffect(() => {
//   const galleryWrapperSm = containerSm.current;
//   const gallerySm = refSm.current;

//   ScrollTrigger.create({
//    trigger: galleryWrapperSm,
//    start: "top top",
//    end: "bottom bottom",
//    scrub: 0.5,

//    pin: gallerySm,
//   });

//   const tl = gsap.timeline();
//   tl.to(gallerySm, {
//    rotate: `360deg`,
//    scrollTrigger: {
//     trigger: galleryWrapperSm,
//     start: "top top",
//     end: `bottom bottom`,
//     scrub: 0.5,
//    },
//   });

//   const galleryWrapperM = containerM.current;
//   const galleryM = refM.current;

//   ScrollTrigger.create({
//    trigger: galleryWrapperM,
//    start: "top top",
//    end: "bottom bottom",
//    scrub: 0.5,

//    pin: galleryM,
//   });

//   tl.to(galleryM, {
//    rotate: `360deg`,
//    scrollTrigger: {
//     trigger: galleryWrapperM,
//     start: "top top",
//     end: `bottom bottom`,
//     scrub: 0.5,
//    },
//   });
//  }, []);

//  return (
//   <>
//    <Navbar />
//    {/* SECTION 1 */}
//    <div className="min-h-screen w-full ">
//     <div className="w-full min-h-screen p-4 flex flex-col items-center justify-center gap-y-8">
//      <h1 className="font-swiss text-center text-[24px]">
//       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio?
//      </h1>
//      <h2 className="font-swiss text-center text-[20px]">
//       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio?
//      </h2>
//     </div>
//    </div>
//    {/* SECTION 2 */}
//    {/* SM ÜSTÜ */}
//    <div
//     ref={containerSm}
//     className="w-full min-h-[300vh] overflow-hidden  flex-col items-center hidden sm:flex"
//    >
//     <div ref={refSm}>
//      <div className="relative w-[150vw] h-[100vw] pb-[50vw] rounded-full  overflow-hidden grid grid-cols-2 *:*:text-[60px] *:*:font-bold">
//       <div className="w-[75vw] h-[75vw]  flex items-center justify-center ">
//        <label className="-rotate-45 w-[80vw] text-end">
//         AI Start-Up in Health
//        </label>
//       </div>
//       <div className="w-[75vw] h-[75vw]  flex items-center justify-center ">
//        <label className="rotate-45 w-[80vw] text-start">Order Systems</label>
//       </div>
//       <div className="w-[75vw] h-[75vw] flex items-start rotate-45 justify-end">
//        <label className=" w-[80vw] scale-[-1] ] text-center ">
//         Berik Textile
//        </label>
//       </div>
//       <div className="w-[75vw] h-[75vw] -rotate-45 flex items-start justify-start ">
//        <label className=" scale-[-1] w-[80vw] text-start">
//         Credit Insurance
//        </label>
//       </div>

//       <div className="absolute w-[150vw] h-[100vw] flex items-center justify-center">
//        <img src={circle} className="size-[15vh]" />
//       </div>
//      </div>
//     </div>
//    </div>
//    {/* SM ALTI */}
//    <div
//     ref={containerM}
//     className="w-full min-h-[300vh] overflow-hidden flex flex-col items-center sm:hidden"
//    >
//     <div
//      ref={refM}
//      className="relative w-[150vh] h-[150vh] mt-[3vh] rounded-full  overflow-hidden grid grid-cols-2 "
//     >
//      <div className="w-[75vh] h-[75vh]  flex items-center justify-center ">
//       <label className="-rotate-45 w-[80vw] text-center">
//        1- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
//        soluta.
//       </label>
//      </div>
//      <div className="w-[75vh] h-[75vh]  flex items-center justify-center ">
//       <label className="rotate-45 w-[80vw] text-center">
//        4- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
//        soluta.
//       </label>
//      </div>
//      <div className="w-[75vh] h-[75vh]  flex items-center justify-center ">
//       <label className="rotate-45 scale-[-1] w-[80vw] text-center">
//        2- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
//        soluta.
//       </label>
//      </div>
//      <div className="w-[75vh] h-[75vh]  flex items-center justify-center ">
//       <label className="-rotate-45 scale-[-1] w-[80vw] text-center">
//        3- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
//        soluta.
//       </label>
//      </div>

//      <div className="absolute w-[150vh] h-[150vh] flex items-center justify-center">
//       <img src={circle} className="size-[15vh]" />
//      </div>
//     </div>
//    </div>
//    {/* SECTION 3 */}
//    <div className="w-full min-h-screen p-4  flex items-center justify-center">
//     <h1 className="font-swiss text-center">{t("title")}</h1>
//    </div>
//   </>
//  );
// }

// export default App;

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Navbar } from "./components";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const App = () => {
 const [t] = useTranslation("general");

 const generalContainer = useRef(null);
 const container = useRef(null);
 const smgeneralContainer = useRef(null);
 const smContainer = useRef(null);

 useEffect(() => {
  const generalContainerRef = generalContainer.current;
  const containerRef = container.current;

  //   ScrollTrigger created
  ScrollTrigger.create({
   trigger: generalContainerRef,
   start: "top top",
   end: "bottom bottom",
   scrub: 0.5,
   pin: containerRef,
  });

  const tl = gsap.timeline();

  //   Container
  tl.to(containerRef, {
   // x: `-${(containerRef.scrollWidth / 5) * 4}`,
   rotate: "-315deg",
   scrollTrigger: {
    trigger: generalContainerRef,
    start: "top top",
    end: `bottom bottom`,
    scrub: 0.5,
   },
  });

  const smGeneralContainerRef = smgeneralContainer.current;
  const smContainerRef = smContainer.current;

  ScrollTrigger.create({
   trigger: smGeneralContainerRef,
   start: "top top",
   end: "bottom bottom",
   scrub: 0.5,
   pin: smContainerRef,
  });

  tl.to(smContainerRef, {
   rotate: `-315deg`,
   scrollTrigger: {
    trigger: smGeneralContainerRef,
    start: "top top",
    end: `bottom bottom`,
    scrub: 0.5,
   },
  });
 }, []);

 //<Landing />
 return (
  <>
   <Navbar />
   {/* ABOVE SM */}
   <div
    ref={generalContainer}
    className=" w-full min-h-[600vh] overflow-hidden  flex-col items-end  hidden sm:flex"
   >
    <div
     ref={container}
     className="w-[200vw] -rotate-[45deg] h-[100vh] flex items-center justify-center sm:mr-[5vw]"
    >
     <div className="text-[6vw] font-bold sm:text-nowrap grid grid-cols-2 *:w-[100vw] *:h-[100vw]  ">
      {/* 3 numaralı */}
      <SpinContainer className="rotate-45 scale-[-1] text-[9vw]">
       <h1 className="bg-koyu_gri text-white px-4 py-1 rounded-xl">
        {t("orderSystems")}
       </h1>
      </SpinContainer>
      {/* 4 numaralı */}
      <SpinContainer className="-rotate-45 text-[9vw]">
       <h1 className="bg-gri text-white px-4 py-1 rounded-xl">
        {t("creditInsurance")}
       </h1>
      </SpinContainer>
      {/* 2 numaralı */}
      <SpinContainer className="cursor-pointer -rotate-45 scale-[-1] text-[7vw]">
       <a href="https://beriktextile.com" target="_blank">
        <h1 className="bg-acik_gri text-koyu_gri px-4 py-1 rounded-xl">
         {t("berikTextile")}
        </h1>
       </a>
      </SpinContainer>
      {/* 1 numaralı */}
      <SpinContainer className="rotate-45 text-[9vw]">
       <h1 className="bg-kırmızı text-white px-4 py-1 rounded-xl">
        {t("aiStartUpInHealth")}
       </h1>
      </SpinContainer>
     </div>
    </div>
   </div>
   {/* UNDUR SM */}
   <div
    ref={smgeneralContainer}
    className=" w-full min-h-[600vh] overflow-hidden flex-col items-center flex sm:hidden"
   >
    <div
     ref={smContainer}
     className="relative w-[200vh] h-[200vh] -rotate-[45deg]  rounded-full overflow-hidden"
    >
     <div className="text-[7vw] font-bold grid grid-cols-2 ">
      {/* 4 numaralı */}
      <SmSpinContainer className="-rotate-45 ">
       <h1 className=" text-center text-[12vw] font-bold bg-gri text-white px-4 py-2 rounded-xl">
        {t("creditInsurance")}
       </h1>
      </SmSpinContainer>
      {/* 1 numaralı */}
      <SmSpinContainer className="rotate-45 ">
       <h1 className=" text-center text-[12vw] font-bold bg-kırmızı text-white px-4 py-2 rounded-xl">
        {t("aiStartUpInHealth")}
       </h1>
      </SmSpinContainer>
      {/* 3 numaralı */}
      <SmSpinContainer className="rotate-45 scale-[-1]">
       <h1 className=" text-center text-[12vw] font-bold bg-koyu_gri text-white px-4 py-2 rounded-xl">
        {t("orderSystems")}
       </h1>
      </SmSpinContainer>
      {/* 2 numaralı */}
      <SmSpinContainer className="-rotate-45 scale-[-1]">
       <a href="https://beriktextile.com" target="_blank">
        <h1 className="text-center text-[12vw] font-bold bg-acik_gri text-koyu_gri px-4 py-2 rounded-xl">
         {t("berikTextile")}
        </h1>
       </a>
      </SmSpinContainer>
     </div>
    </div>
   </div>
  </>
 );
};

export default App;

const SpinContainer = ({ children, className }) => {
 return (
  <div className="flex items-center justify-center ">
   <div className={`w-[100vw] flex items-center ${className}`}>
    <div className="w-[65vw] flex items-center justify-center">{children}</div>
    <div className="w-[35vw] h-10"></div>
   </div>
  </div>
 );
};

const SmSpinContainer = ({ children, className }) => {
 return (
  <div
   className={`flex flex-col items-center justify-center w-[100vh] h-[100vh]  ${className}`}
  >
   <div className="w-[100vw] h-[50vh]">.</div>
   <div className="w-[100vw] px-10 h-[100vh] flex items-center justify-center relative">
    {children}
   </div>
  </div>
 );
};
