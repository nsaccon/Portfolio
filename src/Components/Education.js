import { Grid } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { FaSchool } from "react-icons/fa";
const Education = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Fade top delay={100}>
            <h3 className="title">
              <FaSchool size="0.8em" /> Education
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
            <h4 className="experience-title">Conestoga College</h4>
            <h5 className="experience-description">IT Innovation and Design</h5>
            <ul>
              <li>Maintaining a 3.94 GPA – graduating April 2021</li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Education;
