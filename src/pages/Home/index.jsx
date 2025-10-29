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
          <p>
            A resume boils down to two aspects: Proof of Work and Proof of
            Knowledge.
          </p>
          <p>Let me show you my Proofs.</p>
        </div>
        <img src="src/assets/code.png" alt="Professionally done code" />
      </section>
      {/* Credentials */}
      <section>
        <h2>Proof of Knowledge</h2>
        <h4>Credentials</h4>
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
        <a href="/credentials" class="button-primary">
          See More
        </a>
      </section>
      {/* Projects */}
      <section>
        <h2>Proof of Work</h2>
        <h4>Projects</h4>
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
        <a href="/project" class="button-primary">
          See More
        </a>
      </section>
      {/* Work Expirence */}
      <section>
        <h4>Work Expirence</h4>
      </section>
      {/* Skills */}
      <section>
        <h4>Skills</h4>
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
              "Kubernetes",
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
      {/* About me */}
      <section class="container">
        <div>
          <img
            src="src/assets/suit_and_tie.jpg"
            alt="A suite a professional would wear"
          />
        </div>
        <div class="contact_content">
          <h2>About Alexander</h2>
          <p>
            A tech enthusiast who works with Networking, Software, and Hardware.
            With skills in the creation and management of tech stacks from the
            frontend to the OS running the servers. Soon to have a Bachelor of
            Science in Computer Science with a Minor in Cybersecurity from
            College of the Ozarks. With already obtained Certifications from
            CompTIA, Network+, and Security+. With skills in Docker, Kubernetes,
            Linux, Windows, and more. Enthusiastic and passionate professional
            passionate about building cyber solutions to build the next LAN,
            MAN, and WAN.{" "}
          </p>
          <p>
            Proven ability in collaboration with technical and operational
            teams, with a strong belief in automation and optimization with
            continuous delivery. Individually designed and deployed CI/CD
            pipelines, working with the requirements of stakeholders to push
            system architectures and workflow enhancements. A strong foundation
            to propel any company to greater heights.
          </p>
          <Contacts />
        </div>
      </section>
    </>
  );
}
