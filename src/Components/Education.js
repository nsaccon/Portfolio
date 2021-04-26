import { Grid } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import LightSpeed from "react-reveal/LightSpeed";
import { FaSchool } from "react-icons/fa";
const Education = () => {
  return (
    <>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <Fade top delay={100}>
            <h3 className="title">
              <FaSchool size="0.8em" className="popIcon" /> Education
            </h3>
          </Fade>
        </Grid>
        <Grid item xs={2}>
          <div color="red">
            <Flip bottom delay={100}>
              <div className="experience-side-text">2017 – 2021</div>
            </Flip>
            <Flip bottom delay={400}>
              <div className="experience-side-text">Kitchener ON</div>
            </Flip>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div align="left">
            <Flip bottom delay={100}>
              <h4 className="experience-title">IT Innovation and Design</h4>
            </Flip>

            <Flip bottom delay={400}>
              <h5 className="experience-description">Conestoga College</h5>
            </Flip>
            <ul>
              <LightSpeed right>
                <li>Graduated April 2021</li>
                <li>Maintained a 3.94 GPA</li>
              </LightSpeed>
            </ul>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Education;
