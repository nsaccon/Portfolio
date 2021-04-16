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
                Developed RESTful micro-services in Go and C# ASP .NET Core with
                MongoDB &#38; MS SQL
              </li>
              <li>
                Improved existing APIs by addressing security weaknesses and
                race condition vulnerabilities
              </li>
              <li>
                Executed a rules service using Open Policy Agent from initial
                design through completion
              </li>
              <li>
                Knowledge with Docker containers and Kubernetes cluster
                management on Azure
              </li>
              <li>
                Introduced JSON structured logging and persisting Jaeger trace
                and span IDs for traceability with Azure log analytics Kusto
                queries and alerts
              </li>
              <li>
                Experienced with continuous integration tools such as
                SonarCloud, and Snyk
              </li>
              <li>
                Collaborated in teams of 7-12, Agile dev environment, and
                performing peer code review
              </li>
              <li>
                Worked in using React JS components such as Router, and using
                Material UI
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
