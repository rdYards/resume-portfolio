import "./style.css";
import { ProjectHeader } from "../../components/ProjectHeader/ProjectHeader";

export function HomeLab() {
  return (
    <section class="page">
      <ProjectHeader
        title="Home Lab"
        prog={"in-progress"}
        link={""}
        summary={
          "Personal lab to learn networking and DevOps. An attempt to built my own internet."
        }
        skills={[
          "Proxmox",
          "Kubernetes",
          "Docker",
          "Linux",
          "Bash",
          "Networking",
          "Ollama (Docker)",
          "Debian",
          "Ubuntu",
          "Git",
          "CI-CD",
          "Gitea",
          "Cisco",
          "Netgear",
          "NAS (samba)",
          "Deepseek",
          "Gwen",
          "Gemma",
          "Mistral",
        ]}
      />
      <h2>Overview</h2>
      <div className="page-section left">
        <p>
          My Homelab is a personal homelab project born from a desire for
          greater control over online services and a path toward a DevOps
          career, evolving into a near-business-ready solution for a Senior year
          project presentation. Built on a foundation of Proxmox VE
          virtualization and a lightweight Kubernetes (k3s) cluster, the
          environment hosts self-hosted services such as Gitea and Pi-hole, and
          leverages carefully selected hardware, including a Cisco UCS C210 M2
          server and HP Z240 workstations.
        </p>
        <img
          src="/src/assets/project-assets/Proxmox_Dashboard.png"
          alt="Proxmox DashBoard"
        />
      </div>
      <h2>Hardware Used</h2>
      <div className="page-section column">
        <ul>
          <li>Netgear: Nighthawk R8000P</li>
          <li>Cisco: UCS C210 M2</li>
          <li>Cisco: Catalyst 2960-X</li>
          <li>HP: Z240 Tower Workstation (x2)</li>
        </ul>
      </div>
      <div className="page-section img-bar">
        <a
          href="https://www.cisco.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://brand-assets.security.cisco.com/cisco-light.svg"
            alt="Cisco Logo"
          />
        </a>
        <a
          href="https://www.hp.com/us-en/home.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/assets/project-assets/logo_HP_Electric_Blue_keyline.png"
            alt="HP Logo"
          />
        </a>
        <a
          href="https://www.netgear.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/assets/project-assets/NTGR.D.svg"
            alt="Netgear Logo"
          />
        </a>
      </div>
      <h2>Software Used</h2>
      <div className="page-section column">
        <ul>
          <li>
            Proxmox VE: A Virtualization platform allowing for flexible resource
            allocation and environment creation. Chosen for its stability,
            comprehensive features, and community support.
          </li>
          <li>Linux (Debian): Base operating system for VMs and containers.</li>
          <li>
            Kubernetes (k3s): Container orchestration platform for automating
            deployment, scaling, and management of applications. K3s was
            selected for its lightweight nature and ease of installation.
          </li>
          <li>
            Kubernetes Control Plane: Composed of master node VMs managing the
            cluster, including API server, scheduler, and controller manager.
          </li>
          <li>
            Kubernetes Worker Nodes: VMs running the actual application
            containers and providing the computational resources.
          </li>
          <li>
            Samba Server: Providing file sharing access across the network.
          </li>
          <li>
            Gitea Service: Deployed as a Kubernetes deployment, a self-hosted
            Git service for version control and collaboration. Provides a secure
            and private alternative to public Git repositories.
          </li>
          <li>
            Pi-hole Containers: Currently running as standalone containers,
            planned for integration into the Kubernetes cluster. Network-level
            DNS service, enhancing network privacy and performance.
          </li>
        </ul>
      </div>
      <div className="page-section img-bar">
        <a
          href="https://kubernetes.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/assets/project-assets/kube_logo.svg"
            alt="Kubernetes Logo"
          />
        </a>
        <a href="https://k3s.io/" target="_blank" rel="noopener noreferrer">
          <img
            src="/src/assets/project-assets/k3s-original.svg"
            alt="K3s Logo"
          />
        </a>
        <a
          href="https://www.proxmox.com/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/assets/project-assets/proxmox-logo-stacked-color.svg"
            alt="Proxmox Logo"
          />
        </a>
        <a
          href="https://about.gitea.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/assets/project-assets/gitea_logo.svg"
            alt="Gitea Logo"
          />
        </a>
        <a
          href="https://www.linuxfoundation.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/assets/project-assets/linux-icon.svg"
            alt="Linux Logo"
          />
        </a>
        <a
          href="https://www.debian.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.debian.org/logos/openlogo-nd.svg"
            alt="Debian Logo"
          />
        </a>
        <a
          href="https://pi-hole.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/assets/project-assets/PiHole.svg"
            alt="PiHole Logo"
          />
        </a>
        <a
          href="https://documentation.ubuntu.com/server/how-to/samba/file-server/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/assets/project-assets/samba_logo.svg"
            alt="Samab Logo"
          />
        </a>
      </div>
      <div className="page-section column">
        <h2>Homelab: TECH Talk</h2>
        <p>
          My Homelab is my largest and most ambitious project. Initially, my
          homelab began with the observation that Silicon Valley investment was
          slowing down, and many companies were forced to learn how to generate
          revenue through their products. This has led to many “free” services
          transitioning to subscription services. I have no desire to pay for
          vastly bloated services, nor do I want to use my personal data as
          payment for free services. This led me to start my own homelab. Years
          later, I am now a CS student preparing for my Senior year project,
          which requires coding an independent program to a near business-ready
          state to present to a board of business professionals. However, with
          my desire to move into the DevOps space, I also wanted to add the goal
          of hosting all the tools and services needed for my project on my own
          hardware.
        </p>
        <p>
          As of writing, my homelab would be referred to as “streamline” in
          business terms. Procrastination in the first two years of college has
          put a squeeze on my time. Currently, the homelab is built upon a
          combination of physical hardware and virtualization, transitioning
          towards a fully containerized environment managed by Kubernetes.
          Initially, the setup relied on four physical machines, designed to
          replicate some of the redundancy found in traditional database setups.
          Since then, I’ve shifted towards a hypervisor-centric approach using
          Proxmox VE. Currently, two HP Z240 Tower Workstations and a Cisco UCS
          C210 M2 run Proxmox, providing the platform for hosting a collection
          of Virtual Machines (VMs) and Containers.
        </p>
        <p>
          The core of the application hosting is a Kubernetes cluster,
          specifically utilizing k3s, a lightweight Kubernetes distribution. I
          opted for K3s, as I initially started with K8s, but, being a brand-new
          student to the ecosystem, I failed miserably. My mentor then
          recommended K3s, which I used instead. The cluster comprises six VMs
          running within Proxmox. This decision was driven by the desire to
          learn and implement a modern orchestration platform, understanding its
          benefits for deployment, scaling, and management of applications.
          Within the Kubernetes cluster, I’ve deployed Gitea, a self-hosted Git
          service, to manage source code and the necessary dependencies required
          for the cluster to operate effectively.
        </p>
        <p>
          A separate component of my setup includes two Proxmox Containers
          running Pi-hole, a DNS service. While initially a separate initiative,
          integrating Pi-hole into the Kubernetes cluster is a future goal to
          centralize management and leverage the cluster’s scalability. I also
          implemented local network file sharing using Samba, providing access
          to files across the network and serving as a RAID backup storage on
          the Cisco UCS C210 M2. I also currently deploy software that requires
          a GPU, such as Ollama, as a Docker image on my personal machine.
          Docker has become its own isolated environment on my workstation for
          applications that cannot benefit from a Kubernetes cluster.
        </p>
        <p>
          Looking ahead, I plan to expand the cluster’s functionality
          significantly. Inspired by recent developments in the DevOps space,
          particularly content from Techno Tim, I’m focusing on GitOps
          principles, implementing a solution like Flux to automate deployments
          and configuration management by leveraging Git hosted on my local
          Gitrea instance. The following steps involve integrating logging and
          monitoring tools, such as Prometheus and Grafana, to gain visibility
          into the cluster’s performance and health. Then, I added N8n for
          automation, as I have recently discovered the benefits of virtual
          employees and hope to automate as much of my senior year project as
          possible. I am excited to utilize these tools in the near future to
          resolve current and future issues, and to mirror best practices in
          production environments, ultimately preparing to enter the DevOps
          space.
        </p>
      </div>
    </section>
  );
}
