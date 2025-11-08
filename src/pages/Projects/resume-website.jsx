import "./style.css";
import { ProjectHeader } from "../../components/ProjectHeader/ProjectHeader";

export function ResumeWebsite() {
  return (
    <section class="page">
      <ProjectHeader
        title="Resume Website"
        prog={"in-progress"}
        link={"https://github.com/rdYards/resume-portfolio"}
        summary={
          "Website to host further details featured on my resume, and an opportunity to highlight projects previously done or actively done."
        }
        skills={[
          "Preact (Javascript Framework)",
          "(Github) CI-CD",
          "Github Actions",
          "Github Pages",
          "Vite",
          "npm",
          "CSS",
          "JSX",
        ]}
      />
      <h2>Overview</h2>
      <div className="page-section">
        <p>
          This is a personal project to develop a portfolio website that
          showcases my skills, credentials, and personal projects, going beyond
          the limitations of platforms like LinkedIn. My primary goal is to
          establish a central hub for my professional online presence and a
          platform to showcase projects that are not well-suited for traditional
          resume formats.
        </p>
      </div>
      <h2>Technologies Used</h2>
      <div className="page-section column">
        <ul>
          <li>
            Preact: Chosen for its small size, and performance. A great tool for
            backend builders to create frontends.
          </li>
          <li>
            Preact Router: Utilized for managing client-side routing for
            navigation between pages.
          </li>
          <li>
            GitHub Actions: Automates CI/CD processes, running tests and
            deploying the site to GitHub Pages on each push.
          </li>
          <li>
            GitHub Pages: Used for hosting the static website with free and
            reliable service.
          </li>
          <li>JSX: Used for defining UI components.</li>
          <li>
            CSS Modules & Global Styles: Scoped styling within components,
            avoiding conflicts and enhancing maintainability.
          </li>
          <li>
            Vite: Fast development server with hot module replacement (HMR) for
            quick iteration during development.
          </li>
        </ul>
      </div>
      <h2>Tech & Implementation</h2>
      <div className="page-section left">
        <a
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/pages/Projects/project-assets/preact_logo.svg"
            alt="Preact Logo"
          />
        </a>
        <p>
          The website is built using Preact, a fast 3kB alternative to React. I
          chose Preact because I do not plan to work on the Frontend, but it is
          a great slim resource for people who work on the backend to create
          useful frontends. This allowed me to gain practical frontend
          experience while prioritizing performance. The architecture centers on
          a component-based structure, mirroring my preferred coding approach,
          making the learning period relatively seamless. Using a router offered
          by Preact to manage the different pages: the homepage, credentials
          section, and individual project pages, each functioning as a
          self-contained component.
          <br />
          <br />A key implementation detail was the decision to use a static
          site. While Preact is capable of dynamic rendering, I opted to
          pre-render all pages during the build process. This simplified
          deployment and further optimized performance, leveraging the benefits
          of serving static assets. This worked perfectly for my plan to use
          GitHub Pages, which offers free services for static websites. I
          utilized Preact’s JSX syntax to define the UI components, which were
          then compiled into optimized JavaScript code.
        </p>
      </div>
      <h2>CI/CD Automation</h2>
      <div className="page-section right">
        <p>
          The build and deployment process is fully automated using GitHub
          Actions. A workflow is triggered on each push to the main branch,
          running tests, building the static site, and deploying it to GitHub
          Pages. This workflow utilizes Vite for dependency management and build
          tasks. The configuration ensures that the website is automatically
          updated with each code change, streamlining the development and
          release cycle. I can focus on writing code to showcase my projects and
          learn how to build a backend based on automation, as I plan to extend
          this project with additional features and apply these skills to future
          projects.
        </p>
        <img
          src="/src/pages/Projects/project-assets/GitHub_Actions.svg"
          alt="GitHub Actions Logo"
        />
      </div>
      <div className="page-section column">
        <h2>Portfolio Website: TECH Talk</h2>
        <p>
          Ignore title, no idea what this section should be called. This section
          is the "blog" about the project's development. The project was
          developing a personal portfolio website designed to showcase my
          skills, credentials, and projects beyond traditional platforms like
          LinkedIn. The primary motivation is to create a centralized hub for my
          professional online presence, where I can showcase work that doesn't
          fit neatly into a resume or other conventional formats.
        </p>
        <p>
          My goal was to create an interactive, visually appealing environment
          that would allow me to showcase some of my credentials and discuss
          various projects in more depth. While also using the website to get
          more involved with DevOps and GitHub Actions. Eventually, I plan to
          migrate the website to a personal server for self-hosting, allowing me
          to be more engaged with automation. However, until I obtain a public
          IP, that will not happen.
        </p>
        <p>
          I chose Preact because I didn't want to learn a whole framework for
          the Frontend, such as Vue, React, or Svelte, but still wanted to learn
          a Framework. I chose Preact since it matches the component style of
          React, which I enjoy, and is built more slimly. I don't need a
          comprehensive set of tools to create a web OS; I just need enough to
          get a website up and running. This made Preact a solid choice.
        </p>
        <p>
          I built the site around "components" and "pages". Since I have taken
          the old school, manual method of creating a website. I wanted to make
          it as plug-and-play as possible. With most big pieces of the website
          being components, I can drop them into the website, and each project
          serves as a template for future projects. If you look at
          "src/pages/Projects/style.css", you will notice that I have pushed the
          CSS for all projects into a single file. This way, I can copy and
          paste a project file with minimal adjustments.
        </p>
        <p>
          Below are the components and pages. Below are some key components and
          the main pages of the website.
        </p>
        <h3>Components</h3>
        <ul>
          <li>
            Header Component: The navigation bar directs users to various
            locations around the website and includes a download link to my
            resume.
          </li>
          <li>
            Banner Component: For showcasing projects with progress status and
            links. I'm proud of this component. If you observe, when you hover
            your mouse, an outline will appear, but it is not a border. As the
            "border" is on top of the Banner. Leading to a nicer look, it is
            pretty satisfying.
          </li>
          <li>
            Contacts Component: A simple component that contains icons linking
            to professional accounts on other websites and my resume.
          </li>
          <li>
            Credential Banner Component: Inspired by Banner, to display
            credentials and my degree.
          </li>
          <li>
            Project Header Component: A part of the template approach for
            /Projects. To show project details at the top of individual project
            pages in a standardized format.
          </li>
          <li>
            Skills Components: A Simple way to display skills in a bubble style.
          </li>
        </ul>
        <h3>Pages</h3>
        <ul>
          <li>
            Homepage: Features an overview of the entire website with sections
            on credentials, projects, work experience, and skills.
          </li>
          <li>
            Credentials Page: Lists educational degrees, certifications, etc.
          </li>
          <li>
            Projects Page: A directory of projects, each containing their own
            webpage. This page serves as a library for the featured projects.
            While the homepage features my highlights, Projects contains all
            projects (yes, at the moment they are the same, but I plan to create
            more Projects).
          </li>
        </ul>
        <h3>Hosting</h3>
        <p>
          As a college student, funds are as available as my sleep schedule.
          This led to the decision to use GitHub Pages. With many companies
          using GitHub, this works well for my situation. I can expand my GitHub
          profile and get a free website hoster. GitHub Pages, to note, requires
          websites to be "static," meaning only frontend tools are used; this
          leads to using Preact and Vite.
        </p>
        <p>
          I also chose GitHub to learn about their Actions system. This is
          paired with my personal Gitea server, which I have in my home lab
          (mentioned in my Home Lab project). With my long-term plan to pursue
          DevOps/MLOps, this is the logical step to take in that direction.
        </p>
      </div>
    </section>
  );
}
