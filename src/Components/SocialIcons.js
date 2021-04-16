import { Grid } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import { SocialIcon } from "react-social-icons";

const SocialIcons = () => {
  return (
    <div>
      <Grid container lg={4}>
        <Grid item xs={4}>
          <Fade top delay={600}>
            <SocialIcon
              url="https://github.com/nsaccon"
              fgColor="#ab5a35"
              bgColor="#d6b39a"
            />
          </Fade>
        </Grid>
        <Grid item xs={4}>
          <Fade top delay={900}>
            <SocialIcon
              url="https://www.linkedin.com/in/nathansaccon/"
              fgColor="#ab5a35"
              bgColor="#d6b39a"
            />
          </Fade>
        </Grid>
        <Grid item xs={4}>
          <Fade top delay={1200}>
            <SocialIcon
              url="mailto:nathansaccon10@hotmail.com"
              fgColor="#ab5a35"
              bgColor="#d6b39a"
            />
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
};

export default SocialIcons;
