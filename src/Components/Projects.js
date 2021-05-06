import { Grid } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import { GoBeaker } from "react-icons/go";
import { FaAward } from "react-icons/fa";
import imgCollegeM8 from "../Images/CollegeM8.png";
import imgDocuSign from "../Images/DocuSign.png";
import imgDHL from "../Images/DHL.jpg";
import imgNateflix from "../Images/Nateflix.jpg";

const Projects = () => {
  return (
    <div className="content-container">
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <Fade top delay={100}>
            <h3 className="title">
              <GoBeaker size="0.8em" className="popIcon" /> Projects
            </h3>
          </Fade>
        </Grid>

        <Grid item xs={6}>
          <div className="project-container" align="left">
            <Fade left delay={600}>
              <h4 className="project-title">Nateflix</h4>
            </Fade>
            <Fade left delay={200}>
              <p className="project-text">
                This project was <b>created to feel and act like Netflix</b>,
                for the purpose of building my knowledge of react. Made with
                React.js and Redux, Nateflix uses the TMDb API to pull realtime
                movie information. Authentication and hosting are implemented
                with firebase.
              </p>
              <Fade left delay={500}>
                <div>
                  <a href="https://github.com/nsaccon/nateflix">
                    View on Github
                  </a>
                  <br />
                  <a href="https://nateflix-build.web.app/">View Deployment</a>
                </div>
              </Fade>
            </Fade>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Fade right delay={600}>
            <img
              src={imgNateflix}
              title="Daily Hockey Lineups Logo"
              alt="NHL Logo"
              className="project-image"
            />
          </Fade>
        </Grid>

        <Grid item xs={6}>
          <Fade left delay={600}>
            <img
              src={imgCollegeM8}
              title="CollegeM8 Login Screen"
              alt="Screenshot of CollegeM8 Login Screen"
              className="project-image"
            />
          </Fade>
        </Grid>
        <Grid item xs={6}>
          <div className="project-container">
            <Fade right delay={600}>
              <h4 className="project-title">CollegeM8</h4>
            </Fade>
            <Fade right delay={200}>
            <div className="projects_award">
                <FaAward
                  className="projects_awardIcon"
                  size="1.8em"
                  title="Capstone Project 'Best of Program' Award - April 2021"
                />
                <div className="projects_awardText">
                  <b>Capstone Project 'Best of Program' Award</b> - April 2021
                </div>
              </div>
            </Fade>
            <Fade right delay={200}>
              
              <p className="project-text">
                This project is a web-based <b>automatic planner application</b>{" "}
                that is designed to help students organize their schedules.
                Developed with a C# API that interacts with the front-end, as well as
                the algorithm that intelligently generates a schedule
                tailored to the student. Implemented with C# and EF Core, and
                hosted on MS Azure servers. Created as part of a group capstone project for the IT Innovation and Design program.
              </p>
            </Fade>
            <Fade right delay={500}>
              <div>
                <a href="https://github.com/nsaccon/CollegeM8Capstone">
                  View on Github
                </a>
                <br />
                <a href="https://mk519.github.io/projectdev2021/login.html">
                  View Deployment
                </a>
              </div>
            </Fade>
          </div>
        </Grid>

        <Grid item xs={6}>
          <div className="project-container" align="left">
            <Fade left delay={600}>
              <h4 className="project-title">DailyHockeyLineups</h4>
            </Fade>
            <Fade left delay={200}>
              <p className="project-text">
                Daily fantasy hockey prediction application built with python.
                Developed to <b>predict the outcome of NHL games</b>, and
                predict the players that will be most valuable based on how much
                they cost on DraftKings and FanDuel. At one time the predictions
                were posted on a blog that accumulated more than 100,000
                pageviews.
              </p>
              <Fade right delay={500}>
                <div>
                  <a href="https://github.com/nsaccon/DHLineups">
                    View on Github
                  </a>
                </div>
              </Fade>
            </Fade>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Fade right delay={600}>
            <img
              src={imgDHL}
              title="Daily Hockey Lineups Logo"
              alt="NHL Logo"
              className="project-image"
            />
          </Fade>
        </Grid>

        <Grid item xs={6}>
          <Fade right delay={600}>
            <img
              src={imgDocuSign}
              title="DocuSign Logo"
              alt="DocuSign Logo"
              className="project-image"
            />
          </Fade>
        </Grid>
        <Grid item xs={6}>
          <div className="project-container" align="left">
            <Fade left delay={600}>
              <h4 className="project-title">DocuSign Integration</h4>
            </Fade>
            <Fade left delay={200}>
              <p className="project-text">
                This project is a C# console application that interacts with
                Docusign’s API as part of a <b>billing system integration</b>.
                Created for a local law firm, this application automatically
                charges clients for signed paperwork after the signature process
                is completed. The need for this project arose as part of the
                Covid-19 strategy to allow lawyers to work more efficiently from
                home.
              </p>
            </Fade>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
