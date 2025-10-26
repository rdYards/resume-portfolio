import "./style.css";
import { Banner } from "../../components/Banner/Banner";

export function Home() {
  return (
    <>
      <section>Welcome</section>
      <section>
        <h3> Projects: </h3>
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
      </section>
      <section>Skills</section>
      <section>Contact</section>
      <section>Resume</section>
    </>
  );
}
