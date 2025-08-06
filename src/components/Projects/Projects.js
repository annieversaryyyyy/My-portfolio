import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { petProjectsData } from "../../data";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Мои проекты</h2>
      <div className="projects-grid">
        {petProjectsData.map((pet, index) => (
          <Card key={index} className="project-card">
            <Card.Body>
              <Card.Title>{pet.name}</Card.Title>
              <Card.Text>
                {pet.description}
                {pet.git ? (
                  <>
                    <br />
                    <a
                      href={pet.git}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    GitHub репозиторий
                    </a>
                  </>
                ) : null}
              </Card.Text>
              <Button href={pet.url} target="_blank" rel="noopener noreferrer">
                Открыть проект
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
