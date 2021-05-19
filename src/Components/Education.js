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
              <div className="education-side-text">2017 – 2021</div>
            </Flip>
            <Flip bottom delay={400}>
              <div className="education-side-text">Kitchener ON</div>
            </Flip>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div align="left">
          <Flip bottom delay={400}>
              <h4 className="education-school">Conestoga College</h4>
            </Flip>
            <Flip bottom delay={100}>
              <h4 className="education-achievement">Advanced Diploma, IT Innovation and Design</h4>
            </Flip>
            <ul>
              <LightSpeed right>
                <li>Achieved "President’s Honour List" <i className="education_smallAddition"> - Awarded for highest average in graduating class</i></li>
                <li>Awarded "High Distinction"</li>
                <li>Graduated April 2021 with 3.95 GPA</li>
              </LightSpeed>
            </ul>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Education;
