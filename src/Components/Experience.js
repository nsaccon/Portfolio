import { Grid } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { MdWork } from "react-icons/md";
import LightSpeed from "react-reveal/LightSpeed";

const Experience = () => {
  return (
    <>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <Fade top delay={100}>
            <h3 className="title">
              <MdWork size="0.8em" className="popIcon" /> Experience
            </h3>
          </Fade>
        </Grid>
        <Grid item xs={2}>
          <Flip bottom delay={100}>
            <div className="experience-side-text">05/2019 – 08/2020</div>
          </Flip>
          <Flip bottom delay={400}>
            <div className="experience-side-text">Cambridge ON</div>
          </Flip>
        </Grid>
        <Grid item xs={8}>
          <div align="left"><Flip bottom delay={100}>
          <h4 className="experience-title">Software Developer Co-op</h4>
            </Flip>

            <Flip bottom delay={400}>
            <h5 className="experience-description">Gore Mutual Insurance</h5>
            </Flip>
            <LightSpeed right cascade>
            <ul>
              <li>
              Developed RESTful micro-services in C# .NET Core and SQL that perform core business functions
              </li>
              <li>
              Improved existing APIs by participating in code reviews and regular refactoring
              </li>
              <li>
              Creation of Golang logic for faster vendor underwriting rules solution
              </li>
              <li>
              Integrate existing databases to expose data through APIs using Entity Framework Core
              </li>
              <li>
              Productionize applications with Azure DevOps, Kubernetes, and Docker
              </li>
              <li>
              Experienced with continuous integration tools such as SonarCloud, and Snyk
              </li>
              <li>
              Prepare documentation for technical and non-technical team members
              </li>
              <li>
              Communicate effectively during agile ceremonies throughout the development process
              </li>
            </ul>
            </LightSpeed>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Experience;
