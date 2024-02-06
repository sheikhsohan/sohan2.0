import { useEffect } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const Resume = () => {
  useEffect(() => {
    document.querySelectorAll(".progress_inner").forEach(function (progress) {
      var pValue = parseInt(progress.dataset.value, 10);
      var pColor = progress.dataset.color;
      var pBarWrap = progress.querySelector(".bar");
      var pBar = progress.querySelector(".bar_in");
      var number = progress.querySelector(".number");
      var label = progress.querySelector(".label");

      number.style.right = 100 - pValue + "%";

      setTimeout(function () {
        label.classList.add("opened");
      }, 500);

      pBar.style.width = pValue + "%";
      pBar.style.backgroundColor = pColor;

      setTimeout(function () {
        pBarWrap.classList.add("open");
      });
    });
  }, []);

  const educations = [
    {
      id: 1,
      subject: "Computer Sceince and Engineering",
      university: "Satkhira Polytechnic Institute",
      date: "2022",
    },
    {
      id: 2,
      subject: "Dakhil",
      university: "Sharafpur Darul Quran Dakhil Alia Madrasah",
      date: "2016",
    },
    {
      id: 3,
      subject: "JDC",
      university: "Sharafpur Darul Quran Dakhil Alia Madrasah",
      date: "2014",
    },
  ];

  const course = [
    {
      id: 1,
      courseName: "Full Responsive Web Design",
      academy: "Certified By BDTask LTD.",
      date: "2022",
    },
    {
      id: 2,
      courseName: "Complete Wordpress Website Development",
      academy: "Certified By Udemy",
      date: "2023",
    },
    {
      id: 3,
      courseName: "Complete PYTHON Programming for Beginners - 2023",
      academy: "Certified By Udemy",
      date: "2023",
    },
    {
      id: 4,
      courseName: "The Ultimate React Js Course 2024: Start from Scratch",
      academy: "Certified By Udemy",
      date: "2024",
    },
  ]

  const personalSkills = [
    { id: 1, title: "Time Management", value: "90" },
    { id: 2, title: "Effeciency", value: "70" },
    { id: 3, title: "Intigrity", value: "80" },
  ];

  const programmingSkills = [
    { id: 1, title: "HTML & CSS", value: "95"},
    { id: 2, title: "Bootstrap 5", value: "90"},
    { id: 3, title: "JavaScript", value: "80"},
    { id: 3, title: "React", value: "70"},
  ]

  const softwareSkills = [
    { id: 1, title: "Ms Office", value: "80" },
    { id: 2, title: "Adobe Photoshop", value: "75" },
    { id: 3, title: "Adobe Illustrator", value: "90" },
    { id: 4, title: "WordPress", value: "75" },
  ];

  return (
    <div className="iknow_tm_resume">
      <div className="iknow_tm_main_title">
        <span>Resume</span>
        <h3>Combination of Skill &amp; Experience</h3>
      </div>
      <div className="resume_inner">
        <div className="left">
          <div className="info_list">
            <div className="iknow_tm_resume_title">
              <h3>Education</h3>
              <span className="shape" />
            </div>
            <ul>
              {educations.map((education) => (
                <li key={education.id}>
                  <div className="list_inner">
                    <div className="short">
                      <div className="job">
                        <h3>{education.subject}</h3>
                        <span>{education.university}</span>
                      </div>
                      <div className="year">
                        <span>{education.date}</span>
                      </div>
                    </div>
                    <div className="text">
                      <p>{education.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="info_list">
            <div className="iknow_tm_resume_title">
              <h3>Courses</h3>
              <span className="shape" />
            </div>
            <ul>
              {course.map((course) => (
                <li key={course.id}>
                  <div className="list_inner">
                    <div className="short">
                      <div className="job">
                        <h3>{course.courseName}</h3>
                        <span>{course.academy}</span>
                      </div>
                      <div className="year">
                        <span>{course.date}</span>
                      </div>
                    </div>
                    <div className="text">
                      <p>{course.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        <div className="right">
        <div className="skills_list">
            <div className="iknow_tm_resume_title">
              <h3>Programming Skills</h3>
              <span className="shape" />
            </div>
            <div className="personal">
              <div className="dodo_progress">
                {programmingSkills.map((skill) => (
                  <div
                    className="progress_inner"
                    data-value={skill.value}
                    key={skill.id}
                  >
                    <span>
                      <span className="label">{skill.title}</span>
                      <span className="number">{skill.value}%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="skills_list">
            <div className="iknow_tm_resume_title">
              <h3>Personal Skills</h3>
              <span className="shape" />
            </div>
            <div className="personal">
              <div className="dodo_progress">
                {personalSkills.map((skill) => (
                  <div
                    className="progress_inner"
                    data-value={skill.value}
                    key={skill.id}
                  >
                    <span>
                      <span className="label">{skill.title}</span>
                      <span className="number">{skill.value}%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="skills_list">
            <div className="iknow_tm_resume_title">
              <h3>Software Skills</h3>
              <span className="shape" />
            </div>
            <div className="software">
              <div className="circular_progress_bar">
                <ul>
                  {softwareSkills.map((skill) => (
                    <li key={skill.id}>
                      <div className="list_inner">
                        <div className="myCircle" data-value="0.95">
                          <CircularProgressbar
                            value={skill.value}
                            strokeWidth={4}
                            styles={buildStyles({
                              // Colors
                              pathColor: "#ff451b",
                            })}
                          />
                          <h3 className="number">{skill.value}%</h3>
                        </div>
                        <div className="title">
                          <h3>{skill.title}</h3>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
