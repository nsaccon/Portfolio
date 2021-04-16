import { Grid } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import { GoBeaker } from "react-icons/go";
import imgCollegeM8 from "../Images/CollegeM8.png";
import imgDocuSign from "../Images/DocuSign.png";

const Projects = () => {
  return (
    <div className="content-container">
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <Fade top delay={100}>
            <h3 className="title">
              <GoBeaker size="0.8em" className="popIcon" /> Projects
            </h3>
          </Fade>
        </Grid>

        <Grid item xs={4}>
          <Fade left delay={600}>
          <img
            src={imgCollegeM8}
            title="CollegeM8 Login Screen"
            alt="Screenshot of CollegeM8 Login Screen"
            className="project-image"
          />
            </Fade>
          
        </Grid>
        <Grid item xs={6}>
          <div className='project-container'>
          <Fade right delay={600}>
          <h4 className="project-title">CollegeM8</h4>
            </Fade>
            <Fade right delay={200}>
            <p className="project-text">
              Developed a professional 3D game in the span of 3 months, using C#
              MonoGame for the course{" "}
              <b>Game Programming with Data Structures</b>. Designed with custom
              2D collision detections, billboard particle emissions, frustum
              model culling, and for efficient garbage and resource management.
            </p>
            </Fade>
            <Fade right delay={500}>
              <div>
                <a href="https://github.com/nsaccon/CollegeM8Capstone">
                  View on Github
                </a>
              </div>
            </Fade>
          </div>
        </Grid>

        <Grid item xs={6}>
          <div align="left">
          <Fade left delay={600}>
          <h4 className="project-title">DocuSign Integration</h4>
            </Fade>
            <Fade left delay={200}>
            <p className="project-text">
              Developed a professional 3D game in the span of 3 months, using C#
              MonoGame for the course{" "}
              <b>Game Programming with Data Structures</b>. Designed with custom
              2D collision detections, billboard particle emissions, frustum
              model culling, and for efficient garbage and resource management.
            </p>
            </Fade>
          </div>
        </Grid>
        <Grid item xs={4}>
        <Fade right delay={600}>
        <img
            src={imgDocuSign}
            title="DocuSign Logo"
            alt="DocuSign Logo"
            className="project-image"
          />
            </Fade>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
