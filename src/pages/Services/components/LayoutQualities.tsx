import { QualityService } from "./QualityService";

export default function LayoutQualities() {
  return (
    <div className="flex items-start justify-between w-full max-w-[890px] mb-40">
      <div className="relative">
        <img
          className="big-image-service"
          src="./big-image-service.jpg"
          alt="big-image-service"
        />
        <img
          className="absolute -right-12 -bottom-12 small-image-service"
          src="./small-image-service.jpg"
          alt="small-image-service"
        />
      </div>
      <div className="flex flex-col gap-12">
        <QualityService />
      </div>
    </div>
  );
}
