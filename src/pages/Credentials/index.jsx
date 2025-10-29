import "./style.css";
import { CredBanner } from "../../components/CredBanner/CredBanner";

export function Credentials() {
  return (
    <section>
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
    </section>
  );
}
