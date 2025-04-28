import SubTitleFeedBack from "./SubTitleFeedBack";
import TitleProjects from "./TitleProjects";

export default function TitleFeed() {
  return (
    <div className="flex flex-col items-center gap-5">
      <TitleProjects title='Depoimentos'/>
      <SubTitleFeedBack />
    </div>
  )
}