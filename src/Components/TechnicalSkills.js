import { Grid } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";
import DevIcons from "./DevIcons";
import { GrTechnology } from "react-icons/gr";

const TechnicalSkills = () => {
  return (
    <div className="content-container">
      <Grid container spacing={2} justify="center">
        <Grid item xl={4} className="dev-icons">
          <Flip bottom>
            <h3 className="title"> Technical Skills </h3>
          </Flip>
          <DevIcons />
        </Grid>
        <Grid item lg={6}>
          <Fade delay={800}>
            <p className="text">
              Experienced back-end developer in RESTful architecture, GraphQL or
              gRPC protocols. Driven to follow standards such as structured JSON
              logging useful for debugging and data analytics querying, and most
              importantly security and monitoring.
              <br />
              <GrTechnology size="0.8em" />
              <br />
              Developed an efficient rules service using Open Policy Agent for
              nationwide broker quoting.
            </p>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
};

export default TechnicalSkills;
