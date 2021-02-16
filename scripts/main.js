function MainModule() {
  // let aboutMeButton = document.querySelector("#about_me_botton");
  // let experienceButton = document.querySelector("#experience_botton");
  const ret = {};

  ret.func1 = document.getElementById(
    "about_me_botton"
  ).onclick = function switchToAboutMe() {
    document.getElementById("introduction").innerHTML = AboutMeContent();
  };
  ret.func2 = document.getElementById(
    "experience_botton"
  ).onclick = function switchToExperience() {
    document.getElementById("introduction").innerHTML = ExperienceContent();
  };
  return ret;
}

function AboutMeContent() {
  return `<div id="intro_content">
              <h2>Basic</h2>
              <div>
                <ul>
                  <li>Name: Tiange He</li>
                  <li>Origin: China</li>
                  <li>Race: Asian</li>
                </ul>
              </div>
              <h2>Interest</h2>
              <ul>
                <li>Coding</li>
                <li>Cats Lover</li>
                <li>Dogs Lover</li>
              </ul>
            </div>`;
}

function ExperienceContent() {
  return `<div id="intro_content">
              <h2>Education</h2>
              <div>
                <ul>
                  <strong>Degrees</strong>
                  <li>
                    <strong>BSMEE</strong> Bachlor of Science in Mechanical
                    Engineering
                  </li>
                  <li><strong>BS</strong> Bachlor of Science in Mathematics</li>
                  <li>
                    <strong>MS</strong> Master of Science in Computer Science
                  </li>
                </ul>
                <ul>
                  <strong>Courses</strong>
                  <li>
                    Networking, Distributed System, Algorithm, Object-Oriented
                    Design, Computer System, Intensive Fundamental of Computer
                    Science, Discrete Math and Data Structure
                  </li>
                </ul>
              </div>
              <h2>Projects</h2>
              <ul>
                <strong>Ski-Resort Cloud-based System</strong>
                <li>
                  Build and deploy a ski-resort system on AWS EC2 to record all
                  ski lift rides from selected resorts
                </li>
                <li>
                  Handle massive http requests simultaneously in different
                  scales to simulate clients’ requests to serve
                </li>
                <li>
                  Design and deploy MySQL database on RDS and implement CRUD
                  operation with JDBC
                </li>
              </ul>
            </div>`;
}

MainModule();
