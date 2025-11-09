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
          "Faster Whisper",
          "Virtual Enviroments",
          "JACK",
        ]}
      />
      <h2>Overview</h2>
      <div className="page-section left">
        <p>
          Grasshopper is a personal project focused on building a
          voice-activated assistant tailored for use during a sci-fi RPG
          campaign. The goal was to create a hands-free interface allowing
          players to interact with game lore using natural language. The project
          leverages speech-to-text, large language model (LLM) processing, and
          text-to-speech technologies to achieve this, all while being entirely
          self-contained and running locally on a Linux system.
        </p>
        <a href="https://ollama.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="/src/assets/project-assets/ollama.svg"
            alt="Ollama Logo"
          />
        </a>
      </div>
      <h2>Technologies Used</h2>
      <div className="page-section column">
        <ul>
          <li>
            Python: Primary programming language for orchestrating the entire
            process.
          </li>
          <li>
            JACK Audio Connection Kit: Low-latency audio server and routing
            system for capturing and outputting audio.
          </li>
          <li>
            RealtimeSTT: Realtime speech-to-text engine optimized for low
            latency. Chosen for its local operation and Python integration.
          </li>
          <li>
            Ollama: Framework for running large language models locally. Allows
            easy deployment and interaction with LLMs.
          </li>
          <li>
            Docker: Containerization platform for isolating and deploying
            Ollama.
          </li>
          <li>
            Kokoro-ONNX: Lightweight, multi-voice, multi-language TTS engine
            running on ONNX Runtime, chosen for its efficiency and ONNX support.
          </li>
          <li>
            ONNX Runtime: Inference engine for running the Kokoro-ONNX TTS
            model.
          </li>
        </ul>
      </div>
      <h2>Components</h2>
      <div className="page-section column">
        <ul>
          <li>
            Audio Input Module: Responsible for capturing audio from JACK,
            handling audio device configuration, and pre-processing audio for
            the STT engine.
          </li>
          <li>
            Processing Pipeline: The core of the application, this component
            orchestrates the speech-to-text, LLM processing, and text-to-speech
            stages. It manages data flow between components and handles error
            conditions.
          </li>
          <li>
            Audio Output Module: Responsible for outputting synthesized audio
            through JACK. It includes options for adjusting volume and other
            audio settings.
          </li>
        </ul>
      </div>
      <div className="page-section column">
        <h2>Grasshopper: TECH Talk</h2>
        <p>
          My plan was to create a 100% local and open-source project that I
          could use on my portable workstation. The project began as a desire
          for a sci-fi way to explain lore in an RPG campaign and as an excuse
          to get back into Python development. Python was the second language I
          learned, but after moving to Rust for a couple of years to learn
          lower-level languages, my Python skills got rusty. I wanted to use the
          project to get back into Python and know what a more “professional”
          environment looks like. My college never taught me about virtual
          environments, but I learned this skill while working on this project
          and experimenting with different Python libraries.
        </p>
        <p>
          The core of Grasshopper revolves around a pipeline that transforms
          voice input into actionable output. For Grasshopper, the process
          starts with capturing audio input via JACK, a professional audio
          connection kit for Linux. I wish I could say I chose JACK, as it
          provides a low-latency, highly configurable audio routing environment,
          which was ideal for capturing clean audio for the speech-to-text
          engine. However, JACK is marked as a dependency for RealtimeSTT.
        </p>
        <p>
          RealtimeSTT manages the speech-to-text module for Grasshopper.
          Realtime works on Faster Whisper, which is a reimplementation of
          Whisper from OpenAI. Built into the library is speech-to-text and wake
          word functionality. When running, it will wait for the wake word,
          “grasshopper,” and then start capturing audio. The STT module will
          then capture audio until it detects a pause in speech, convert the
          captured audio into text, and send it to the next module.
        </p>
        <p>
          This transcribed text is then passed to Ollama, a framework for
          running LLMs locally. Ollama runs within a Docker container. While I
          built it on my main PC, I plan to deploy it to a portable workstation
          I have. The more containerization I have, the less dev work I would
          need once I deploy. Using the Python SDK provided by Ollama, the
          program seamlessly communicates from the main Grasshopper script to
          the Ollama instance. The prompt is then sent to Ollama and forwarded
          to gemma3:4b I plan to build a LoRa module containing game lore, as
          you cannot directly attach a RAG source to an Ollama instance;
          however, I have not begun development yet, as other projects are
          interfering. The plan is to allow players to talk to an “in-game” AI
          assistant that can explain lore to them without interrupting the game.
        </p>
        <p>
          Finally, the response from Ollama is fed into Kokoro-ONNX, a
          lightweight, ONNX Runtime-based text-to-speech engine. Kokoro-ONNX was
          selected for support of ONNX Runtime, which I discovered while
          searching for a simple way to implement an open-source TTS. The
          generated audio is then output through JACK, completing the voice
          interaction loop.
        </p>
        <p>
          A significant challenge was managing the audio streams and ensuring
          synchronization between the different components. As this was a
          personal project, you can still find many bugs in the code. At the
          current moment, if you speak the Wakework while Ollama is processing
          an output, another instance will start. If you notice the project is
          built on a single thread, this was intentional as a quick attempt to
          prevent each component from spilling into the others. Later, I plan to
          break each section into its own thread and add significantly more
          robust synchronization support. Another plan is to eventually train my
          own model. As you cannot add a RAG source directly to Ollama, to my
          knowledge, the next step is to create a custom model trained on my
          data. Although I am not currently working on it due to other projects,
          I plan to make it a separate project on the website. Although not my
          most proud project for getting back into Python, it served its
          purpose, and at the current moment, I consider the project complete,
          as it works for my personal needs. When I have more free time, I plan
          to return and improve this program.
        </p>
      </div>
    </section>
  );
}
