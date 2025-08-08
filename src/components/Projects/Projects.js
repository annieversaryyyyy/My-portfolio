import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { petProjectsData } from "../../data";
import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <h2>Мои проекты</h2>
      <div className="projectsGrid">
        {petProjectsData.map((pet, index) => (
          <Card key={index} className="projectCard">
            <Card.Body>
              <Card.Title>{pet.name}</Card.Title>
              <Card.Text>
                {pet.description}
                {pet.git ? (
                  <>
                    <br />
                    <a href={pet.git} target="_blank" rel="noopener noreferrer">
                      GitHub репозиторий
                    </a>
                  </>
                ) : null}
              </Card.Text>
              <div className="techBlock">
                {pet.tech &&
                  pet.tech.map((item, i) => (
                    <span key={i} className="stackItem">
                      {item}
                    </span>
                  ))}
              </div>
              {pet.url ? (
                <>
                  <Button
                    href={pet.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Открыть проект
                  </Button>
                </>
              ) : null}
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
