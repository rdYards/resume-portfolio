import "./style.css";
import { Banner } from "../../components/Banner/Banner";

export function Project() {
  return (
    <section>
      <div class="project_grid">
        <Banner
          prog="in-progress"
          mode="light"
          title="Resume Website"
          description="Website to host further details featured on my resume, and an opportunity to highlight projects previously done or actively done."
          href="/resume-website"
        />
        <Banner
          prog="complete"
          mode="light"
          title="Grasshopper"
          description="Grasshopper is a voice-activated assistant application built to be an assistant in personal RPG campaigns."
          href="/grasshopper"
        />
        <Banner
          prog="in-progress"
          mode="light"
          title="Home Lab"
          description="Personal lab to learn networking and DevOps. An attempt to built my own internet."
          href="/home-lab"
        />
        <Banner
          prog="paused"
          mode="light"
          title="Eldritch Trains"
          description="Eldritch Trains is a 2D top-down game built using Rust and the Macroquad framework. The game was started as a way to get started with the rust programming language."
          href="/eldritch-trains"
        />
      </div>
    </section>
  );
}
