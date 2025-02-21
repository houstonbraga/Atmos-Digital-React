import { Header } from "../../components/Header/Header";
import { HomeInfo } from "./components/HomeInfo";
import './index.css'

export function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      {/* Background */}
      <img
        src="./background.svg"
        alt="background-img"
        className="fixed z-[-1] w-full h-full opacity-50"
      />

      {/* Header fixo no topo */}
      <Header />

      {/* Conteúdo centralizado */}
      <div className="flex flex-col items-center justify-center flex-1">
        <HomeInfo />
      </div>
    </div>
  );
}
