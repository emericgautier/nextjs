import React from "react";
import Meta from "../components/Meta";
import { projects } from "../projectsData";

const portfolio = () => {
  return (
    <div>
      <Meta
        title={"Portfolio dev, les tous derniers projets réalisés"}
        description={"Suite de 70  mots"}
      />
      <h2>PORTFOLIO</h2>
      <ul>{projects}</ul>
    </div>
  );
};

// Executer le code coté serveur

export default portfolio;
