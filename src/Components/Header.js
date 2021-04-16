import { Grid } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";
import SocialIcons from "./SocialIcons";
import nate from '../Images/NateTop.png'

const Header = () => {
  return (
    <header className="header">
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item lg={6}>
          <div className="header-text">
            <Flip top delay={50}>
              <h1>Nathan Saccon</h1>
            </Flip>
            <Bounce left delay={200}>
              <h4>
                I'm an <b>innovative back-end developer</b> with 16 months of
                full-stack co-op work experience.
              </h4>
            </Bounce>
            <SocialIcons />
          </div>
        </Grid>
        <Grid item lg={3}>
          <Fade delay={500} duration={400}>
            <img
              src={nate}
              className="profile-picture"
              title="Nathan Saccon - TODO"
              alt="Nice Pic of nathan"
            />
          </Fade>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
