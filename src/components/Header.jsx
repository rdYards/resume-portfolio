import { useLocation } from "preact-iso";
import "./components.css";

export function Header() {
  const { url } = useLocation();

  return (
    <header>
      <img src="/spaceshuttle_rocket_spaceship_icon.svg" alt="Rocket Icon" />
      <nav>
        <a href="/" class={url == "/" && "active"}>
          Home
        </a>
        <a href="/project" class={url == "/project" && "active"}>
          Project
        </a>
        <a href="/credentials" class={url == "/credentials" && "active"}>
          Credentials
        </a>
        <a
          href="/aeastman_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
