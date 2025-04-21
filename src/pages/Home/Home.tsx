import { Footer } from "@/components/Footer";
import { ButtonHome } from "./components/ButtonHome";
import { Header } from "../../components/Header/Header";
import { ShadowBg } from "../../components/ShadowBg";
import { Carrousel } from "./components/Carrousel";
import { HomeInfo } from "./components/HomeInfo";
import './index.css'
import BackgroundHome from "./components/BackgroundHome";
export function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <BackgroundHome />
      <Header />
      <ShadowBg variant="shadowCenter"/>

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
