import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './Projects.module.css'
import LinkButton from '../layout/LinkButton'
import Container from '../layout/Container'
import ProjectCard from "../project/ProjectCard";
import Loading from "../layout/Loading";

import Message from "../layout/Message";

function Projects() {

  const [projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [projectMessage, setProjectMessage] = useState('')

  const location = useLocation()

  let message = ''


  if(location.state){
    message = location.state.message;
   
  }


  useEffect(()=>{

    fetch('http://localhost:5000/projects')
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setProjects(data)
        setRemoveLoading(true)
      })
      .catch((error) => console.log(error))

  },[])

  const resqs = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application-json'
    }
  }

  function removeProject(id) {

    fetch(`http://localhost:5000/projects/${id}`,resqs)
      .then(resp => resp.json())
      .then(() => {
        setProjects(projects.filter((project)=> project.id !== id))
        setProjectMessage('Projeto removido com sucesso!');
      })
      .catch((err) => console.log(err))


  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Crie seu projeto" />
      </div>
      {message && <Message msg={message} type="success" />}
      {projectMessage && <Message msg={projectMessage} type="success" />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              name={project.name}
              id={project.id}
              category={project.category.name}
              budget={project.budget}
              key={project.id}
              handleRemove={removeProject}

            />
          ))}
          {!removeLoading && <Loading />}
          {removeLoading && projects.length === 0 &&(
            <p>Não há projetos cadastrados!</p>
          )}
      </Container>
    </div>
  );
}

export default Projects;
