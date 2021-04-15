import { Grid } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { MdWork } from "react-icons/md";

const Experience = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Fade top delay={100}>
            <h3 className="title">
              <MdWork size="0.8em" /> Experience
            </h3>
          </Fade>
        </Grid>
        <Grid item xs={3}>
          <Flip bottom delay={100}>
            2017 – 2021
          </Flip>
          <Flip bottom delay={400}>
            Kitchener ON
          </Flip>
        </Grid>
        <Grid item xs={9}>
          <div align="left">
            <h4 className="experience-title">Software Developer Co-op</h4>
            <h5 className="experience-description">Gore Mutual Insurance</h5>
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
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Experience;
