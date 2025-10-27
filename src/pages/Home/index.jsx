import "./style.css";
import { Banner } from "../../components/Banner/Banner";
import { Contacts } from "../../components/Contacts/Contacts";
import Skills from "../../components/Skills";
import { CredBanner } from "../../components/CredBanner/CredBanner";

export function Home() {
  return (
    <>
      {/* Welcome */}
      <section class="container">
        <div class="welcome_content">
          <h1>Alexander Eastman</h1>
          <h3>Networking, Software, Hardware</h3>
          <p>Building my own tech world. From the computer to the router.</p>
        </div>
        <img src="src/assets/code.png" alt="Professionally done code" />
      </section>
      {/* Credentials */}
      <section>
        <h2>Credentials</h2>
        <div class="cred_grid">
          <CredBanner
            mode="light"
            title="Bachelor of Science in Computer Science"
            active_date="May 2026"
            image="src/assets/cofo_logo.png"
          />
          <CredBanner
            mode="light"
            title="Minor in Cybersecurity"
            active_date="May 2026"
            image="src/assets/cofo_logo.png"
          />
          <CredBanner
            mode="light"
            title="CompTIA Network+"
            verify_code="V67GDSW581EEK6S2"
            active_date="June 2025"
            image="src/assets/Network+-svg.svg"
          />
          <CredBanner
            mode="light"
            title="CompTIA Security+"
            verify_code="B5TR4RNY724ES5M2"
            active_date="August 2025"
            image="src/assets/Security+-svg.svg"
          />
        </div>
      </section>
      {/* Projects */}
      <section>
        <h2>Projects</h2>
        <div class="project_grid">
          <Banner
            prog="in-progress"
            mode="light"
            title="Learn Preact"
            description="If you're new to Preact, try the interactive tutorial to learn important concepts"
            href="/project"
          />
          <Banner
            prog="complete"
            mode="dark"
            title="Learn Preact"
            description="If you're new to Preact, try the interactive tutorial to learn important concepts"
            href="https://preactjs.com/tutorial"
          />
          <Banner
            prog="cancelled"
            mode="light"
            title="Learn Preact"
            description="If you're new to Preact, try the interactive tutorial to learn important concepts"
            href="/project"
          />
          <Banner
            prog="paused"
            mode="light"
            title="Learn Preact"
            description="If you're new to Preact, try the interactive tutorial to learn important concepts"
            href="/project"
          />
          <Banner
            prog="updated"
            mode="light"
            title="Learn Preact"
            description="If you're new to Preact, try the interactive tutorial to learn important concepts"
            href="/project"
          />
        </div>
      </section>
      {/* Skills */}
      <section>
        <h2>Skills</h2>
        <div class="skills_grid">
          <Skills
            title="Linux Systems"
            skills={[
              "Debian",
              "Ubuntu",
              "Pop-OS",
              "Arch",
              "EndeavourOS",
              "VanillaOS",
              "Fedora",
              "Rocky Linux",
            ]}
          />
          <Skills
            title="Networking"
            skills={[
              "TCP/IP",
              "Network Management",
              "Virtualization",
              "Network Architecture",
              "Network Protocols",
              "Network Automation",
              "Network Documentation",
            ]}
          />
          <Skills
            title="Software"
            skills={["Rust", "Python", "Go", "Java", "Javascript (Preact)"]}
          />
          <Skills
            title="DevOps"
            skills={[
              "Powershell",
              "Bash",
              "K3s",
              "Docker",
              "Git",
              "Gitea/GitLab/GitHub (CI-CD)",
              "Proxmox",
            ]}
          />
          <Skills
            title="Open-Source LLMs"
            skills={[
              "Ollama (Docker)",
              "Ollama (python SDK)",
              "Deepseek family",
              "Gwen family",
              "Gemma family",
              "Mistral family",
            ]}
          />
          <Skills
            title="IT"
            skills={[
              "Windows",
              "MacOS",
              "Microsoft Configuration Manager (MCM)",
              "PDQ",
              "Hyper-V",
              "LogMeIn Suite",
            ]}
          />
          <Skills
            title="Homelab"
            skills={[
              "Proxmox",
              "Gitea",
              "Cisco UCS C210 M2",
              "Cisco Catalyst 2960-X",
              "Netgear Nighthawk R8000P",
              "NAS samba",
            ]}
          />
          <Skills
            title="Leadership"
            skills={[
              "Human management",
              "Scheduling",
              "Team Communication",
              "Microsoft Teams",
            ]}
          />
        </div>
      </section>
      {/* Contact */}
      <section class="container">
        <div>
          <img
            src="src/assets/suit_and_tie.jpg"
            alt="A nerd in a nice suit"
          />
        </div>
        <div class="contact_content">
          <h2>About Alexander</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos.
          </p>
          <Contacts />
        </div>
      </section>
    </>
  );
}
