import "./style.css";
import { ProjectHeader } from "../../components/ProjectHeader/ProjectHeader";

export function ResumeWebsite() {
  return (
    <>
      <section class="page">
        <ProjectHeader
          title="Resume Website"
          prog={"in-progress"}
          link={"https://github.com/rdYards/resume-portfolio"}
          summary={
            "Website to host further details featured on my resume, and an opportunity to highlight projects previously done or actively done."
          }
          skills={[
            "Javascript (Preact)",
            "(Github) CI-CD",
            "Github Pages",
            "Vite",
            "npm",
            "HTML",
            "CSS",
            "SVG",
          ]}
        />
        <h2>Introduction</h2>
        <p>I dont know what to say</p>
        <h2>Hosting</h2>
        <h2>Structure</h2>
        <h2>Compenent Breakdown</h2>
        <h2>Page Breakdown</h2>
        <h2>Style</h2>
        <h2>Conclusion</h2>
      </section>
    </>
  );
}
