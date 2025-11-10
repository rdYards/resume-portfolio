import "./style.css";
import { ProjectHeader } from "../../components/ProjectHeader/ProjectHeader";

// Import images
import preactLogo from "/src/assets/project-assets/preact_logo.svg";
import githubActionsLogo from "/src/assets/project-assets/GitHub_Actions.svg";
import cofo_id_link from "/src/assets/project-assets/Credential_Link_Update.png";

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
          <img src={preactLogo} alt="Preact Logo" />
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
        <img src={githubActionsLogo} alt="GitHub Actions Logo" />
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
      <h2>Update: Fixing Credential Links</h2>
      <div className="page-section left">
        <p>
          While development of the timeline module, referencing past experiences
          for College of the Ozarks revealed a single page containing all
          workstation data. This necessitated a more granular linking mechanism.
          I then collaborated with the web development team, adding unique ID
          tags to each workstation entry. The timeline module was then updated
          to utilize these IDs, enabling direct links to the corresponding
          workstation details.
        </p>
        <img
          src={cofo_id_link}
          alt="Picture of Workstation Webpage with new id tags for each workstation"
        />
      </div>
      <h2>Update: Pushing to Production</h2>
      <div className="page-section column">
        <p>
          Following local website setup, deployment to GitHub Pages was
          initiated. GitHub offers “actions” and “deploy from a branch” as
          deployment methods to Production. The deployment method selected was
          “deploy from a branch” due to its simplicity. A GitHub Actions
          workflow was created to create a Ubuntu instance, compile the Vite
          project code, and then deploy it to a separate branch, gh-pages.
          GitHub then takes the code in gh-pages and pushes it to Production.
        </p>
        <p>
          The initial push to Production revealed several issues requiring
          resolution. Post-deployment, image and anchor links were
          non-functional. After analysis, I found this stemmed from hardcoded
          URLs specific to the development environment. When using a compiled
          framework like Preact, absolute paths can be problematic. URLs must be
          relative to facilitate correct resolution during the compilation
          process. All hardcoded URLs were updated to use relative paths,
          resolving the issues with broken links.
        </p>
        <p>
          A discrepancy was then found between the expected base root path and
          the actual path on GitHub Pages. GitHub Pages serves projects under a
          subdirectory structure (/repo-name/) rather than the root directory
          (/). This caused navigation issues; for example, clicking the home
          link in the header component (configured for /) resulted in
          redirection to https://rdyards.github.io/ instead of the intended
          https://rdyards.github.io/resume/. Initial attempts to modify the base
          root path at the system level proved unsuccessful as Preact, unlike
          React, does not support this functionality. Consequently, all URLs
          were updated to include the /resume/ prefix, aligning the base path
          with the GitHub Pages configuration.
        </p>
        <p>
          After resolving the above issues, refreshing individual pages resulted
          in 404 errors. GitHub Pages expects a corresponding HTML file for each
          URL that you specify. Preact, as a single-page application (SPA),
          generates only one HTML file, with all routing handled client-side via
          JavaScript. To address this, the solution utilizes a proxy pattern
          based on the open-source project rafgraph/spa-github-pages. This
          involved adding a small snippet of vanilla JavaScript to the
          index.html file and including a 404.html file. This setup allows the
          server to correctly handle all routes, serving the index.html file for
          every request and allowing the client-side router to handle
          navigation. After fixing the frontend, the deploy workflow was updated
          to copy 404.html to the gh-pages branch.
        </p>
        <p>
          Deployment to GitHub Pages presented several unforeseen challenges.
          The process necessitated in-depth troubleshooting and a commitment to
          learning new tools and techniques. However, the ability to explore
          solutions thoroughly, unconstrained by strict time limitations, proved
          invaluable. I plan to expand on what I learn as I continue my
          projects.
        </p>
      </div>
    </section>
  );
}
