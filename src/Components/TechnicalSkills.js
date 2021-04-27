import { Grid } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Roll from "react-reveal/Roll";
import DevIcons from "./DevIcons";
import { GoKebabHorizontal } from "react-icons/go";

const TechnicalSkills = () => {
  return (
    <div className="content-container">
      <Grid container spacing={2} justify="center">
        <Grid item xl={4}>
          <Grid item xl={12}>
            <Flip bottom>
              <h3 className="title">Technical Skills</h3>
            </Flip>
          </Grid>
          <DevIcons />
        </Grid>
        <Grid item lg={6}>
          <Fade delay={800}>
            <p className="text">
              <b>Experienced</b> developer in micro-service
              architecture, designing, building, testing and deploying C# .NET Core APIs.{" "}
              <b>Driven</b> to create innovative solutions such as a python
              program that predicts the outcome of NHL games. 
              <br />
              <Roll delay={1500}>
                <GoKebabHorizontal size="2em" className="popIcon" />
              </Roll>
              <br />
              <b>Effective</b> team member assisting in the planning, development, testing, and deployment of broker quoting API, that connects brokers to the pricing engine.
            </p>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
};

export default TechnicalSkills;
