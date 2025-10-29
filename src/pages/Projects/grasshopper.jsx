import "./style.css";
import { ProjectHeader } from "../../components/ProjectHeader/ProjectHeader";

export function Grasshopper() {
  return (
    <>
      <ProjectHeader
        title="Grasshopper"
        prog={"complete"}
        link={"https://github.com/rdYards/grasshopper"}
        summary={
          "Grasshopper is a voice-activated assistant application built to be an assistant in personal RPG campaigns."
        }
      />
    </>
  );
}
