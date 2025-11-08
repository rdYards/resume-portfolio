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
        skills={["Rust", "Macroquad", "Parry2D"]}
      />
      <h2>Overview</h2>
      <div className="page-section">
        <p>
          Eldritch Trains is a 2D game developed in Rust, intended as a learning
          exercise in lower-level game engine concepts. The project’s primary
          goal was to build a game from the ground up, leveraging a minimal
          rendering framework (Macroquad) to foster a deep understanding of core
          systems, such as collision detection, movement, and animation, rather
          than relying on a pre-built, high-level engine. This provided a
          practical avenue for exploring game development fundamentals and
          building a foundation for more complex projects.
        </p>
      </div>
      <h2>Technologies Used</h2>
      <div className="page-section column">
        <ul>
          <li>
            Rust: The core programming language. Contains memory safety,
            performance, and modern tooling. Chosen as the ecosystem clicked
            first.
          </li>
          <li>
            Macroquad: A lightweight, cross-platform game framework. Selected
            for its simplicity and minimal feature set, forcing a deeper
            understanding of lower-level concepts.
          </li>
          <li>
            Serde & JSON: Used for serialization and deserialization of game
            data, entity, player, and world configuration from JSON files.
          </li>
          <li>
            Parry2D: A 2D collision detection library written in Rust. Chosen
            for its performance and robustness.
          </li>
          <li>
            Asynchronous Runtime: Utilized to load resources (textures,
            animations) in the background, preventing frame drops
          </li>
        </ul>
      </div>
      <h2>Technologies Used</h2>
      <div className="page-section column">
        <ul>
          <li>
            animation.rs: Defines structs for managing animations, including the
            AnimationComponent and AnimationState, which are used to handle
            sprite animations.
          </li>
          <li>
            character.rs: Implements the player character, managing aspects like
            movement, health, camera control, rendering, and interaction with
            other game entities.
          </li>
          <li>
            config/keybings.json: This configuration file defines key bindings
            for various actions in the game, such as walking, sprinting,
            dashing, and more.
          </li>
          <li>
            entities.rs: Contains definitions for different types of entities
            that exist within the game world, including static and dynamic
            objects, along with collision handling.
          </li>
          <li>
            movement.rs: Manages character movement states, including handling
            inputs for walking, sprinting, dashing, and stamina management.
          </li>
          <li>
            npc.rs: Defines non-player characters (NPCs), managing their
            animations, health, interactions with the player, and rendering.
          </li>
          <li>
            physics_engine.rs: Contains the logic for handling physics and
            collisions within the game world.
          </li>
          <li>
            scripts/mod.rs & scripts/pos.rs & scripts/texture_cache.rs: These
            files define utility scripts and helpers, such as texture caching
            and positioning functions for UI elements on screen.
          </li>
          <li>
            settings.rs: Handles configuration settings, including loading key
            bindings from a JSON config file.
          </li>
          <li>
            ui.rs: Defines the user interface components for rendering health
            bars, stamina bars, and other UI elements on screen.
          </li>
          <li>
            world.rs: Manages the game world, loading entities from a JSON
            configuration file and handling their rendering within the game
            environment.
          </li>
        </ul>
      </div>
      <h2>Eldritch Trains: TECH Talk</h2>
      <div className="page-section column">
        <p>
          Eldritch Trains started as a project to learn lower-level coding
          languages, such as C++ and Rust. At a minimum, familiarize myself with
          the ecosystem of the coding languages. While the project was a game,
          it served as the “goal” to push myself towards learning a coding
          language. I first started working with C++ but struggled to understand
          how to utilize the platform, having come from Python. As this is my
          oldest project worth mentioning, this was back when I first started
          coding in a serious format. I then moved to Rust, a language commonly
          found in the same development area as C++, which clicked for me, and I
          decided to use Rust for this project.
        </p>
        <p>
          After choosing the coding language, I moved on to decide on the game
          engine. I wanted a coding language first. Purposely avoiding engines
          such as Unreal or Godot, as they are GUI-first engines. Since my
          primary goal was to learn how to code, I sought a code-first approach.
          This led me to Macroquad, a lightweight, cross-platform framework that
          handles low-level windowing, input, and rendering, but does not
          contain features like physics or animation systems, allowing me to
          implement those systems myself. I build around the character,
          gradually expanding the ecosystem. Starting with something to get
          started, I tried to learn how to code in this new style, and then made
          more purposeful decisions.
        </p>
        <p>
          Eventually, I moved to create what I call “states,” which are found in
          the repository as MovementState and AnimationState. The observant
          coder may notice that there is no HealthState, even though the process
          is relatively simple to set up. This is from a Git command mistake I
          made and did not notice until I started writing this report. My IDE
          remembers the file existed, but Git does not. HealthState has turned
          into a lesson on Git management. These States, however, all attempt to
          serve as modules that can attach to the character, which is the player
          or any NPCs needed. I wanted to keep it modular for organization, but
          in the future, it would allow me to modify sections as I learn more
          about lower-level coding without having to change the entire stack
          each time. Other systems, such as physics and World, are an attempt to
          split into a client-server model. Centralizing the “server” side and
          keeping the “client” side as lightweight as possible. Physics is a
          great showcase, as I have MovementState, which holds the client data,
          but for collision detection, it must be sent to the server
          PhysicsEngine. While I am confident that there are better solutions, I
          did not want to take the StackOverflow approach and attempt to
          duct-tape my own solution. As this project is, at its core, a learning
          experience. AnimationState utilizes Macroquad’s experimental animation
          features, including loading sprite sheets and transitioning between
          frames. I had to learn about caching, as repeatedly loading the same
          file multiple times can lead to crashes for various reasons.
        </p>
        <p>
          I learned how to implement an asynchronous loading system for textures
          and animations to prevent crashing. All configuration files for
          players, NPCs, and the World use JSON files to define the game world
          layout, entity positions, and properties. This allowed for easy
          storage, which I plan to add an abstraction layer to modify later on,
          but at the moment requires manual intervention. If you notice that the
          entities are sorted by their zIndex property, this is part of the
          Macroquad simplicity I mentioned before. Macroquad renders objects on
          a first-come, first-served (FCFS) basis. This property allows control
          over which objects render first. This also has to be managed in
          main.rs with multiple checkpoints to render different sections, such
          as the UI and even the camera, as the entities, by default, in the
          Macroquad engine render upside down.
        </p>
        <p>
          This project, among all my coding projects, is my most proud work.
          While not as comprehensive as others, this project has been built from
          the ground up by me. While entities such as forums and LLMs were
          involved during the learning phase, all code present is mine. It
          served as a great learning opportunity, and I hope to return to it
          once I have more free time available. If you are to judge my coding, I
          request that you look at this project, as I still find it my most
          proud work.
        </p>
      </div>
    </section>
  );
}
