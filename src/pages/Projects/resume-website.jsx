import "./style.css";
import { ProjectHeader } from "../../components/ProjectHeader/ProjectHeader";

export function ResumeWebsite() {
  return (
    <>
      <ProjectHeader
        title="Resume Website"
        prog={"in-progress"}
        link={"https://github.com/rdYards/resume-portfolio"}
        summary={
          "Website to host further details featured on my resume, and an opportunity to highlight projects previously done or actively done."
        }
      />
    </>
  );
}
