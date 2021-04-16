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
              <b>Experienced</b> back-end developer in micro-service architecture,
              building and maintaining C# .NET Core APIs. <b>Driven</b> to create
              innovative solutions such as a Visual Studio template installer to
              reduce the time it takes to create a new API by over an hour, as
              part of the inner source group.
              <br />
              <Roll delay={1500}>
                <GoKebabHorizontal size="2em" className="popIcon" />
              </Roll>
              <br />
              Developed API that allows instant nationwide broker quoting, which connects third party brokers and the new pricing platform.
            </p>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
};

export default TechnicalSkills;
