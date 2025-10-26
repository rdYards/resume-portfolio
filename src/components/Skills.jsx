// Define the Skills component
const Skills = ({ title, nthSkills }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {Array.from({ length: nthSkills }, (_, i) => (
          <li key={i}>Skill {i + 1}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;