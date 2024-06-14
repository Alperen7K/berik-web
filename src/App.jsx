import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./App.css";
import { Navbar } from "./components";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import circle from "./assets/circle.png";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
function App() {
 const [t] = useTranslation("general");

 const refSm = useRef(null);
 const containerSm = useRef();
 const refM = useRef(null);
 const containerM = useRef();

 useEffect(() => {
  const galleryWrapperSm = containerSm.current;
  const gallerySm = refSm.current;

  ScrollTrigger.create({
   trigger: galleryWrapperSm,
   start: "top top",
   end: "bottom bottom",
   scrub: 0.5,

   pin: gallerySm,
  });

  const tl = gsap.timeline();
  tl.to(gallerySm, {
   rotate: `360deg`,
   scrollTrigger: {
    trigger: galleryWrapperSm,
    start: "top top",
    end: `bottom bottom`,
    scrub: 0.5,
   },
  });

  const galleryWrapperM = containerM.current;
  const galleryM = refM.current;

  ScrollTrigger.create({
   trigger: galleryWrapperM,
   start: "top top",
   end: "bottom bottom",
   scrub: 0.5,

   pin: galleryM,
  });

  tl.to(galleryM, {
   rotate: `360deg`,
   scrollTrigger: {
    trigger: galleryWrapperM,
    start: "top top",
    end: `bottom bottom`,
    scrub: 0.5,
   },
  });
 }, []);

 return (
  <>
   <Navbar />
   {/* SECTION 1 */}
   <div className="min-h-screen w-full border-b-2 border-solid border-black">
    <div className="w-full min-h-screen p-4 flex flex-col items-center justify-center gap-y-8">
     <h1 className="font-swiss text-center text-[24px]">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio?
     </h1>
     <h2 className="font-swiss text-center text-[20px]">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio?
     </h2>
    </div>
   </div>
   {/* SECTION 2 */}
   {/* SM ÜSTÜ */}
   <div
    ref={containerSm}
    className="w-full min-h-[300vh] overflow-hidden  flex-col items-center hidden sm:flex"
   >
    <div ref={refSm}>
     <div className="relative w-[150vw] h-[100vw] pb-[50vw] rounded-full  overflow-hidden grid grid-cols-2 ">
      {/* <div className="w-[75vw] h-[75vw]  flex items-center justify-center ">
      <label className="-rotate-45 w-[80vw] text-center">
      1- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
      soluta.
      </label>
      </div>
      <div className="w-[75vw] h-[75vw]  flex items-center justify-center ">
      <label className="rotate-45 w-[80vw] text-center">
      4- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
      soluta.
      </label>
      </div>
      <div className="w-[75vw] h-[75vw]  flex items-center justify-center ">
      <label className="rotate-45 scale-[-1] w-[80vw] text-center">
      2- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
      soluta.
      </label>
      </div>
      <div className="w-[75vw] h-[75vw]  flex items-center justify-center ">
      <label className="-rotate-45 scale-[-1] w-[80vw] text-center">
      3- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
      soluta.
      </label>
    </div> */}

      <div className="absolute w-[150vw] h-[100vw] flex items-center justify-center">
       <img src={circle} className="size-[15vh]" />
      </div>
     </div>
    </div>
   </div>
   {/* SM ALTI */}
   <div
    ref={containerM}
    className="w-full min-h-[300vh] overflow-hidden flex flex-col items-center sm:hidden"
   >
    <div
     ref={refM}
     className="relative w-[150vh] h-[150vh] mt-[3vh] rounded-full  overflow-hidden grid grid-cols-2 "
    >
     <div className="w-[75vh] h-[75vh]  flex items-center justify-center ">
      <label className="-rotate-45 w-[80vw] text-center">
       1- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
       soluta.
      </label>
     </div>
     <div className="w-[75vh] h-[75vh]  flex items-center justify-center ">
      <label className="rotate-45 w-[80vw] text-center">
       4- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
       soluta.
      </label>
     </div>
     <div className="w-[75vh] h-[75vh]  flex items-center justify-center ">
      <label className="rotate-45 scale-[-1] w-[80vw] text-center">
       2- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
       soluta.
      </label>
     </div>
     <div className="w-[75vh] h-[75vh]  flex items-center justify-center ">
      <label className="-rotate-45 scale-[-1] w-[80vw] text-center">
       3- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
       soluta.
      </label>
     </div>

     <div className="absolute w-[150vh] h-[150vh] flex items-center justify-center">
      <img src={circle} className="size-[15vh]" />
     </div>
    </div>
   </div>
   {/* SECTION 3 */}
   <div className="w-full min-h-screen p-4 border-t-2 border-solid border-black flex items-center justify-center">
    <h1 className="font-swiss text-center">{t("title")}</h1>
   </div>
  </>
 );
}

export default App;
