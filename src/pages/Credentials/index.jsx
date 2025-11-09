import "./style.css";
import { CredBanner } from "../../components/CredBanner/CredBanner";

// Import images
import cofoLogo from "../../assets/cofo_logo.png";
import networkPlusIcon from "../../assets/Network+-svg.svg";
import securityPlusIcon from "../../assets/Security+-svg.svg";

export function Credentials() {
  return (
    <section>
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
    </section>
  );
}
