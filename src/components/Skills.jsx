const Skills = ({ title, skills }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {skills.map(([skill, link], i) => {
          if (link) {
            // If there is a link for this skill, render it as an anchor tag
            return (
              <li key={i}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {skill}
                </a>
              </li>
            );
          } else {
            // Otherwise, just render the skill as text
            return <li key={i}>{skill}</li>;
          }
        })}
      </ul>
    </div>
  );
};

export default Skills;