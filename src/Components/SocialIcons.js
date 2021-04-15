import { Grid } from '@material-ui/core';
import Flip from "react-reveal/Flip";
import { SocialIcon } from "react-social-icons";

const SocialIcons = () => {
  return (
    <div>
      <Grid container lg={4}>
        <Flip bottom delay={600}>
          <SocialIcon url="https://github.com/nsaccon" fgColor="#ff5a01" />
        </Flip>
        <Flip bottom delay={800}>
          <SocialIcon url="https://www.linkedin.com/in/nathansaccon/" />
        </Flip>
        <Flip bottom delay={1000}>
          <SocialIcon url="mailto:nathansaccon10@hotmail.com" />
        </Flip>
      </Grid>
    </div>
  );
};

export default SocialIcons;
