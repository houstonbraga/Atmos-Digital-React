import { Footer } from "@/components/Footer";
import { ButtonHome } from "./components/ButtonHome";
import { Header } from "../../components/Header/Header";
import { ShadowBg } from "../../components/ShadowBg";
import { Carrousel } from "./components/Carrousel";
import { HomeInfo } from "./components/HomeInfo";
import './index.css'
export function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <img
        src="./background.svg"
        alt="background-img"
        className="fixed z-[-1] w-full h-full opacity-50"
      />

      <Header />
      <ShadowBg variant="shadowP"/>

      <div className="flex flex-col items-center justify-center flex-1 gap-8">
        <HomeInfo />
        <div className="flex justify-items-center gap-6">
          <ButtonHome variant="secondary" title="Contrate-nos" />
          <ButtonHome variant="primary" title="Portifólio" />
        </div>
      </div>
      <Carrousel />
      <Footer />
    </div>
  );
}
