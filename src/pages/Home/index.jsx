import "./style.css";
import { Banner } from "../../components/Banner/Banner";
import { Contacts } from "../../components/Contacts/Contacts";
import Skills from "../../components/Skills";
import { CredBanner } from "../../components/CredBanner/CredBanner";
import { Timeline } from "../../components/Timeline/Timeline";

// Import image assets
import codeImg from "../../assets/code.png";
import cofoLogo from "../../assets/cofo_logo.png";
import networkPlusIcon from "../../assets/Network+-svg.svg";
import securityPlusIcon from "../../assets/Security+-svg.svg";
import suitAndTieImg from "../../assets/suit_and_tie.jpg";
import walmartIcon from "../../assets/walmart_icon.svg";

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
        <img src={codeImg} alt="Professionally done code" />
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
            image={cofoLogo}
          />
          <CredBanner
            mode="light"
            title="Minor in Cybersecurity"
            active_date="May 2026"
            image={cofoLogo}
          />
          <CredBanner
            mode="light"
            title="CompTIA Network+"
            verify_code="V67GDSW581EEK6S2"
            active_date="June 2025"
            image={networkPlusIcon}
          />
          <CredBanner
            mode="light"
            title="CompTIA Security+"
            verify_code="B5TR4RNY724ES5M2"
            active_date="August 2025"
            image={securityPlusIcon}
          />
        </div>
        <a href="/resume/credentials" class="button-primary">
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
            href="/resume/project/resume-website"
          />
          <Banner
            prog="complete"
            mode="light"
            title="Grasshopper"
            description="Grasshopper is a voice-activated assistant application built to be an assistant in personal RPG campaigns."
            href="/resume/project/grasshopper"
          />
          <Banner
            prog="in-progress"
            mode="light"
            title="Home Lab"
            description="Personal lab to learn networking and DevOps. An attempt to built my own internet."
            href="/resume/project/home-lab"
          />
          <Banner
            prog="paused"
            mode="light"
            title="Eldritch Trains"
            description="Eldritch Trains is a 2D top-down game built using Rust and the Macroquad framework. The game was started as a way to get started with the rust programming language."
            href="/resume/project/eldritch-trains"
          />
        </div>
        <a href="/resume/project" class="button-primary">
          See More
        </a>
      </section>
      {/* Work Expirence */}
      <section>
        <h4>Work Expirence</h4>
        <Timeline
          data={[
            {
              icon: cofoLogo,
              title: "IT Student Leader",
              timeline: "May 2025 - Present",
              location:
                "College of the Ozarks, Information Technology Deparqtment; Point Lookout, MS - (On Site)",
              summary:
                "Leading a dynamic team while instructing and training follow coworkers. While developing and implementing improvements to increase company performance and reduce costs.",
              skills: [
                "Human Management",
                "Scheduling",
                "Team Communication",
                "Microsoft Teams",
              ],
              href: "https://www.cofo.edu/Workstation#InformationTechnology-Helpdesk",
            },
            {
              icon: cofoLogo,
              title: "IT Technician",
              timeline: "August 2023 - May 2025",
              location:
                "College of the Ozarks, Information Technology Deparqtment; Point Lookout, MS - (On Site)",
              summary:
                "Working with a dynamic team in an active environment, correcting system faults to maintain uptime of the school's network infrastructure. At the same time, producing and deployments improvements to increase company performance and reduce costs.",
              skills: [
                "Windows 11",
                "MacOS 10.14+",
                "Microsoft Configuration Manager (MCM)",
                "PDQ",
                "Hyper-V",
                "LogMeIn Suite",
              ],
              href: "https://www.cofo.edu/Workstation#InformationTechnology-Helpdesk",
            },
            {
              icon: cofoLogo,
              title: "Cook Assistant and Associate,",
              timeline: "August 2022 - July 2023",
              location:
                "College of the Ozarks, Pearl Rogers Dining Center; Point Lookout, MS - (On Site)",
              summary:
                "Worked a multipurpose role on a dynamic schedule to assist with various needs, including cook assistant and dishwasher duties. While, creating a favorable environment for customers.",
              skills: [
                "Teamwork",
                "Communication",
                "Customer Service",
                "Time Management",
              ],
              href: "https://www.cofo.edu/Workstation#PearlRogers(Cafeteria)",
            },
            {
              icon: walmartIcon,
              title: "CAP2 Stocking Associate,",
              timeline: "September 2020 - December 2023",
              location: "Walmart Inc; Paola, KS - (On Site)",
              summary:
                "Worked with a team to manage inventory in a time-sensitive environment. Managing inventory to ensure product availability to customers.",
              skills: [
                "Time Managment",
                "Inventory Management",
                "Customer Service",
                "Manual Labor",
              ],
              href: "https://careers.walmart.com/",
            },
          ]}
        />
      </section>
      {/* Skills */}
      <section>
        <h4>Skills</h4>
        <div class="skills_grid">
          <Skills
            title="Linux Systems"
            skills={[
              ["Debian", "/resume/project/home-lab"],
              ["Ubuntu", "/resume/project/home-lab"],
              ["Pop-OS", "/resume/project/home-lab"],
              ["Arch", "/resume/project/home-lab"],
              ["EndeavourOS", "/resume/project/home-lab"],
              ["Fedora", "/resume/project/home-lab"],
              ["Rocky Linux", "/resume/project/home-lab"],
            ]}
          />
          <Skills
            title="Networking"
            skills={[
              ["OSI model layers", "/resume/credentials#comptia_network+"],
              ["Networking appliances", "/credentials#comptia_network+"],
              ["Cloud concepts", "/resume/credentials#comptia_network+"],
              ["Ports and protocols", "/resume/credentials#comptia_network+"],
              ["Transmission media", "/resume/credentials#comptia_network+"],
              ["Network topologies", "/resume/credentials#comptia_network+"],
            ]}
          />
          <Skills
            title="Software"
            skills={[
              ["Rust", "/resume/project/eldritch-trains"],
              ["Python", "/resume/project/grasshopper"],
              ["Go", "/resume/project/home-lab"],
              ["Java", "/resume/credentials#bachelor_of_science_in_computer_science"],
              ["Javascript (Preact)", "/resume-website"],
            ]}
          />
          <Skills
            title="DevOps"
            skills={[
              ["Powershell", "https://www.cofo.edu/Workstation#InformationTechnology-Helpdesk"],
              ["Bash", "/resume/project/home-lab"],
              ["Kubernetes", "/resume/project/home-lab"],
              ["Docker", "/resume/project/home-lab"],
              ["Git", "/resume/project/home-lab"],
              ["Gitea/GitLab/GitHub (CI-CD)", "/resume/project/resume-website"],
              ["Proxmox", "/resume/project/home-lab"],
            ]}
          />
          <Skills
            title="Open-Source LLMs"
            skills={[
              ["Ollama (Docker)", "/resume/project/home-lab"],
              ["Ollama (python SDK)", "/resume/project/grasshopper"],
              ["Deepseek family", "/resume/project/home-lab"],
              ["Gwen family", "/resume/project/home-lab"],
              ["Gemma family", "/resume/project/home-lab"],
              ["Mistral family", "/resume/project/home-lab"],
            ]}
          />
          <Skills
            title="IT"
            skills={[
              ["Windows", "https://www.cofo.edu/Workstation#InformationTechnology-Helpdesk"],
              ["MacOS", "https://www.cofo.edu/Workstation#InformationTechnology-Helpdesk"],
              [
                "Microsoft Configuration Manager (MCM)",
                "https://www.cofo.edu/Workstation#InformationTechnology-Helpdesk",
              ],
              ["PDQ", "https://www.cofo.edu/Workstation#InformationTechnology-Helpdesk"],
              ["Hyper-V", "https://www.cofo.edu/Workstation#InformationTechnology-Helpdesk"],
              ["LogMeIn Suite", "https://www.cofo.edu/Workstation#InformationTechnology-Helpdesk"],
            ]}
          />
          <Skills
            title="Homelab"
            skills={[
              ["Proxmox", "/resume/project/home-lab"],
              ["Gitea", "/resume/project/home-lab"],
              ["Cisco UCS C210 M2", "/resume/project/home-lab"],
              ["Cisco Catalyst 2960-X", "/resume/project/home-lab"],
              ["Netgear Nighthawk R8000P", "/resume/project/home-lab"],
              ["NAS samba", "/resume/project/home-lab"],
            ]}
          />
          <Skills
            title="Leadership"
            skills={[
              ["Human management", "https://www.cofo.edu/Workstation#InformationTechnology-Helpdesk"],
              ["Scheduling", "https://www.cofo.edu/Workstation#InformationTechnology-Helpdesk"],
              ["Team Communication", "https://www.cofo.edu/Workstation#InformationTechnology-Helpdesk"],
              ["Microsoft Teams", "https://www.cofo.edu/Workstation#InformationTechnology-Helpdesk"],
            ]}
          />
        </div>
      </section>
      {/* About me */}
      <section class="container">
        <div>
          <img src={suitAndTieImg} alt="A suite a professional would wear" />
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
            MAN, and WAN.
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
