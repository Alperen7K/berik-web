import { useTranslation } from "react-i18next";

export const LanguageSwitch = () => {
 const [t, i18n] = useTranslation("general");

 return (
  <div
   onClick={() => {
    i18n.changeLanguage(i18n.language === "tr" ? "en" : "tr");
    localStorage.setItem("lang", i18n.language === "tr" ? "tr" : "en");
   }}
   className="px-2 py-0.5 text-[16px] w-fit rounded bg-ktp_gray/30 hover:bg-kırmızı/90 bg-kırmızı text-white duration-300 select-none shadow cursor-pointer"
  >
   {i18n.language === "tr" ? "EN" : "TR"}
  </div>
 );
};
