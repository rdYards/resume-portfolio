import "./style.css";
import { ProjectHeader } from "../../components/ProjectHeader/ProjectHeader";

export function Grasshopper() {
  return (
    <section class="page">
      <ProjectHeader
        title="Grasshopper"
        prog={"complete"}
        link={"https://github.com/rdYards/grasshopper"}
        summary={
          "Grasshopper is a voice-activated assistant application built to be an assistant in personal RPG campaigns."
        }
        skills={[
          "Ollama (Python SDK",
          "Ollama (Docker)",
          "RealtimeSTT",
          "Kokoro-ONNX",
          "Kokoro-TTS",
          "Git",
          "Speech to Text",
          "Text to Speech",
        ]}
      />
    </section>
  );
}
