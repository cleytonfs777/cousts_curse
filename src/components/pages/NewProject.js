import { useNavigate, useLocation} from "react-router-dom";

import styles from "./NewProject.module.css";
import ProjectForm from "../project/ProjectForm";

function NewProject() {

  const navigate = useNavigate()
  const location = useLocation()

  function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.service = [];

    const myInit = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(project),
    };



    fetch("http://localhost:5000/projects", myInit)
      .then((resp) => resp.json())
      .then((data) => {
        //Redirect
        navigate("/projects", {
          state: { message: "Projeto criado com sucesso!" },
        });
        console.log(JSON.stringify(project));
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Crie seu projeto" />
    </div>
  );
}

export default NewProject;
