import "./style.css";
import { ProjectHeader } from "../../components/ProjectHeader/ProjectHeader";

export function EldritchTrains() {
  return (
    <section class="page">
      <ProjectHeader
        title="Eldritch Trains"
        prog={"paused"}
        link={"https://github.com/rdYards/eldritch_trains"}
        summary={
          "Eldritch Trains is a 2D top-down game built using Rust and the Macroquad framework. The game was started as a way to get started with the rust programming language."
        }
      />
    </section>
  );
}
