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
          <div className="project-container">
            <Fade right delay={600}>
              <h4 className="project-title">CollegeM8</h4>
            </Fade>
            <Fade right delay={200}>
              <p className="project-text">
                This project is a web-based <b>AI planning application</b> that is
                designed to help students organize their schedules. Developed
                the API that interacts with the front-end, as well as the AI
                algorithm that intelligently generates a schedule tailored to
                the student. Implemented with C# and EF Core, and hosted on MS
                Azure servers.
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
                This project is a C# console application that interacts with
                Docusign’s API as part of a <b>billing system integration</b>. Created for a local law firm, this application
                automatically charges clients for signed paperwork after the
                signature process is completed. The need for this project arose
                as part of the Covid-19 strategy to allow lawyers to work more
                efficiently from home.
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
