import "./components.css";

export function SkillsBanner(props) {
  return <div class="skills-banner">
    {props.skills && props.skills.map((skill, index) => (
      <span key={index} class="banner-skills">{skill}</span>
    ))}
  </div>;
}
