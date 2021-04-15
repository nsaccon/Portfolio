import { Grid } from '@material-ui/core';
import Flip from "react-reveal/Flip";
import { SocialIcon } from "react-social-icons";

const SocialIcons = () => {
  return (
    <div>
      <Grid container lg={4}>
        <Flip bottom delay={600}>
          <SocialIcon url="https://github.com/nsaccon" fgColor="#ab5a35" bgColor='#d6b39a' />
        </Flip>
        <Flip bottom delay={800}>
          <SocialIcon url="https://www.linkedin.com/in/nathansaccon/" fgColor="#ab5a35" bgColor='#d6b39a' />
        </Flip>
        <Flip bottom delay={1000}>
          <SocialIcon url="mailto:nathansaccon10@hotmail.com" fgColor="#ab5a35" bgColor='#d6b39a' />
        </Flip>
      </Grid>
    </div>
  );
};

export default SocialIcons;
