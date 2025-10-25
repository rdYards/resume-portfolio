import { useLocation } from "preact-iso";
import "./components.css";

export function Header() {
  const { url } = useLocation();

  return (
    <header>
      <object type="image/svg+xml" data="src/assets/ex-icon.svg"></object>
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
      </nav>
    </header>
  );
}
