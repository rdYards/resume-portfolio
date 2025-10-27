const Skills = ({ title, skills }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;