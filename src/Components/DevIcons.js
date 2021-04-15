import { Grid } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";
import { FaGit, FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiCsharp,
  SiKubernetes,
  SiAzuredevops,
  SiDocker,
  SiPython,
  SiReact,
  SiMysql,
  SiBootstrap,
  SiGithub,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

const DevIcons = () => {
  const size = "2em";
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Fade left delay={300}>
          <SiCsharp size={size} title="C#" />
        </Fade>
      </Grid>
      <Grid item xs={4}>
      <Fade left delay={800}>
          <SiPython size={size} title="Python" />
        </Fade>
      </Grid>
      <Grid item xs={4}>
      <Fade left delay={1300}>
          <SiJavascript size={size} title="Javascript" />
        </Fade>
      </Grid>

      <Grid item xs={4}>
      <Fade left delay={300}>
        <FaGit size={size} title="Git" />
        </Fade>
      </Grid>
      <Grid item xs={4}>
      <Fade left delay={800}>
        <SiDocker size={size} title="Docker" />
        </Fade>
      </Grid>
      <Grid item xs={4}>
      <Fade left delay={1300}>
        <SiKubernetes size={size} title="Kubernetes" />
        </Fade>
      </Grid>

      <Grid item xs={4}>
      <Fade left delay={300}>
        <DiVisualstudio size={size} title="Visual Studio" />
        </ Fade>
      </Grid>
      <Grid item xs={4}>
      <Fade left delay={800}>
        <SiAzuredevops size={size} title="Azure DevOps" />
        </Fade>
      </Grid>
      <Grid item xs={4}>
      <Fade left delay={1300}>
        <SiReact size={size} title="React.js" />
        </Fade>
      </Grid>

      <Grid item xs={4}>
      <Fade left delay={300}>
        <SiBootstrap size={size} title="Bootstrap" />
        </Fade>
      </Grid>
      <Grid item xs={4}>
      <Fade left delay={800}>
        <SiMysql size={size} title="SQL" />
        </Fade>
      </Grid>
      <Grid item xs={4}>
      <Fade left delay={1300}>
        <SiGithub size={size} title="GitHub" />
        </Fade>
      </Grid>
    </Grid>
  );
};

export default DevIcons;
