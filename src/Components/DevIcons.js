import { Grid } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import { FaGit } from "react-icons/fa";
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
          <div className='devicon'><SiCsharp size={size} title="C#" /></div>
        </Fade>
      </Grid>
      <Grid item xs={4}>
      <Fade left delay={800}>
          <div className='devicon'><SiPython size={size} title="Python" /></div>
        </Fade>
      </Grid>
      <Grid item xs={4}>
      <Fade left delay={1300}>
          <div className='devicon'><SiJavascript size={size} title="Javascript" /></div>
        </Fade>
      </Grid>

      <Grid item xs={4}>
      <Fade left delay={300}>
        <div className='devicon'><FaGit size={size} title="Git" /></div>
        </Fade>
      </Grid>
      <Grid item xs={4}>
      <Fade left delay={800}>
        <div className='devicon'><SiDocker size={size} title="Docker" /></div>
        </Fade>
      </Grid>
      <Grid item xs={4}>
      <Fade left delay={1300}>
        <div className='devicon'><SiKubernetes size={size} title="Kubernetes" /></div>
        </Fade>
      </Grid>

      <Grid item xs={4}>
      <Fade left delay={300}>
        <div className='devicon'><DiVisualstudio size={size} title="Visual Studio" /></div>
        </ Fade>
      </Grid>
      <Grid item xs={4}>
      <Fade left delay={800}>
        <div className='devicon'><SiAzuredevops size={size} title="Azure DevOps" /></div>
        </Fade>
      </Grid>
      <Grid item xs={4}>
      <Fade left delay={1300}>
        <div className='devicon'><SiReact size={size} title="React.js" /></div>
        </Fade>
      </Grid>

      <Grid item xs={4}>
      <Fade left delay={300}>
        <div className='devicon'><SiBootstrap size={size} title="Bootstrap" /></div>
        </Fade>
      </Grid>
      <Grid item xs={4}>
      <Fade left delay={800}>
        <div className='devicon'><SiMysql size={size} title="SQL" /></div>
        </Fade>
      </Grid>
      <Grid item xs={4}>
      <Fade left delay={1300}>
        <div className='devicon'><SiGithub size={size} title="GitHub" /></div>
        </Fade>
      </Grid>
    </Grid>
  );
};

export default DevIcons;
