import "./style.css";
import { ProjectHeader } from "../../components/ProjectHeader/ProjectHeader";

export function HomeLab() {
  return (
    <section class="page">
      <ProjectHeader
        title="Home Lab"
        prog={"in-progress"}
        link={""}
        summary={
          "Personal lab to learn networking and DevOps. An attempt to built my own internet."
        }
      />
    </section>
  );
}
