import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = () => {
  const progressData = [
    { value: 66, title: "Title 1" },
    { value: 75, title: "Title 2" },
    { value: 80, title: "Title 3" },
    { value: 90, title: "Title 4" },
    { value: 100, title: "Title 5" },
  ];

  return (
    <>
      <div className="dashboard-name">
        <h1>Welcome Admin</h1>
      </div>
      <div className="dashboard-number">
        <div className="progressive-bar">
          {progressData.map((item, index) => (
            <div className="progress-container" key={index}>
              <CircularProgressbar
                value={item.value}
                text={`${item.value}%`}
                styles={buildStyles({
                  pathColor: "#0085ff",
                  textColor: "#0085ff",
                })}
              />
              <p className="progress-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
