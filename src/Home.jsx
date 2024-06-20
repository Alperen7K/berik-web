import { Navigate, useRoutes, Route } from "react-router-dom";

import "./App.css";
import { X } from "./assets/X";
import { Mail } from "./assets/Mail";
import { Navbar } from "./components";
import React, { useRef } from "react";
import { Linkedin } from "./assets/Linkedin";
import { useTranslation } from "react-i18next";
import {
 motion,
 useMotionTemplate,
 useMotionValue,
 useSpring,
} from "framer-motion";

function Home() {
 return (
  <>
   {/* Anasayfa içeriği */}
   <Navbar />
   <div className="w-full min-h-screen p-4 border-t-2 border-solid border-black flex items-center justify-center overflow-hidden">
    <TiltCard />
   </div>
  </>
 );
}

const ROTATION_RANGE = 15.5;
const HALF_ROTATION_RANGE = 15.5 / 2;

const TiltCard = () => {
 const ref = useRef(null);
 const [t] = useTranslation("general");

 const x = useMotionValue(0);
 const y = useMotionValue(0);

 const xSpring = useSpring(x);
 const ySpring = useSpring(y);

 const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

 const handleMouseMove = (e) => {
  if (!ref.current) return [0, 0];

  const rect = ref.current.getBoundingClientRect();

  const width = rect.width;
  const height = rect.height;

  const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
  const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

  const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
  const rY = mouseX / width - HALF_ROTATION_RANGE;

  x.set(rX);
  y.set(rY);
 };

 const handleMouseLeave = () => {
  x.set(0);
  y.set(0);
 };

 return (
  <motion.div
   ref={ref}
   onMouseMove={handleMouseMove}
   onMouseLeave={handleMouseLeave}
   style={{
    transformStyle: "preserve-3d",
    transform,
   }}
   className="relative h-[70vh] w-[95vw] sm:w-[80vw] bg-acik_gri/20 rounded-[75px] border-2 border-solid border-gri/10 "
  >
   <div
    className="p-4 py-12 flex flex-col justify-between items-center h-full"
    style={{
     transform: "translateZ(75px)",
     transformStyle: "preserve-3d",
    }}
   >
    <h1 className="md:px-10 py-8 font-swiss text-center text-[20px] sm:text-[24px] lg:text-[30px]">
     {t("title")}
    </h1>

    <a
     href="mailto:info@berikgirisim.com"
     className="font-engravers text-center w-fit text-[20px] flex items-center  mx-auto bg-kırmızı hover:bg-kırmızı/90 duration-300 hover:scale-105 px-4 py-2 rounded-2xl text-white"
    >
     <Mail className="size-6 fill-white mr-2" />
     info@
     <strong>berikgirisim</strong>
     .com
    </a>
    <section className="mx-auto flex items-center gap-x-2 *:fill-gri *:size-8 *:*:duration-300 *:*:rounded-lg">
     <a
      href="https://x.com/berikgirisim"
      target="_blank"
      rel="Berik Girişim X Hesabı"
     >
      <X className="hover:fill-koyu_gri " />
     </a>
     <a
      href="https://www.linkedin.com/company/berik-girisim/?trk=similar-pages"
      target="_blank"
      rel="Berik Girişim Linkedin Hesabı"
     >
      <Linkedin className="hover:fill-koyu_gri " />
     </a>
    </section>
   </div>
  </motion.div>
 );
};

export const Router = () => {
 return useRoutes([
  { path: "", element: <Home /> },
  { path: "*", element: <Navigate to="/" replace /> },
 ]);
};
