import React from "react";
import SmoothList from "react-smooth-list";
import styles from "../../styles/Home.module.css";

const StackIcons = (props) => {
  const array = props.data;
  const icons = array.map((item) => {
    let cor = "react";

    switch (item) {
      case "node":
        cor = "#e1c1c1";
        break;
      case "express":
        cor = "#f2c986";
        break;
      default:
        cor = "#bad5f5";
        break;
    }

    return (
      <div
        key={item}
        className={styles.icon_Projects}
        style={{ backgroundColor: cor }}
      >
        <span>{item}</span>
      </div>
    );
  });
  return <div> {icons} </div>;
};

export const Projects = (props) => {
  const data = [
    {
      project: "Project X",
      stack: ["react", "express", "node"],
      website: "https://www.google.com",
      github: "https://www.github.com",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png",
      needs: "People with super powers",
      status: "In Development",
    },
    {
      project: "Project XYZ",
      stack: ["python", "django"],
      website: "https://www.google.com",
      github: "https://www.github.com",
      needs: "People with super powers, semi-super powers, or no powers at all",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
      status: "Live",
    },
    {
      project: "Project X",
      stack: ["react", "express", "node"],
      website: "https://www.google.com",
      github: "https://www.github.com",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png",
      needs: "People with super powers",
      status: "In Development",
    },
    {
      project: "Project XYZ",
      stack: ["python", "django"],
      website: "https://www.google.com",
      github: "https://www.github.com",
      needs: "People with super powers, semi-super powers, or no powers at all",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
      status: "Live",
    },
    {
      project: "Project X",
      stack: ["react", "express", "node"],
      website: "https://www.google.com",
      github: "https://www.github.com",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png",
      needs: "People with super powers",
      status: "In Development",
    },
    {
      project: "Project XYZ",
      stack: ["python", "django"],
      website: "https://www.google.com",
      github: "https://www.github.com",
      needs: "People with super powers, semi-super powers, or no powers at all",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
      status: "Live",
    },
  ];
  return (
    <SmoothList>
      <div>
        <div className={styles.Projects}>
          <div className={styles.Projects_text_content}>
            <h4>O que fiz</h4>
            <h1>Projetos</h1>
          </div>
          <div className={styles.Projects_boxes}>
            {data.map((element) => (
              <div key={element} className={styles.Projects_box}>
                <img src={element.image} />
                <div className={styles.Projects_content}>
                  <StackIcons data={element.stack}></StackIcons>
                  <h1>{element.project}</h1>
                  <div className={styles.Projects_links}>
                    <a
                      className={styles.Projects_website}
                      href={element.website}
                    >
                      Build
                    </a>
                    <a className={styles.Projects_github} href={element.github}>
                      Github
                    </a>
                  </div>
                  <h4 className={styles.Projects_status}>
                    Status: {element.status}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SmoothList>
  );
};
