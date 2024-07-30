import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = () => {
  const progressData = [
    { value: 66, title: "Product Range Expansion" },
    { value: 75, title: "Customer Satisfaction" },
    { value: 80, title: "Innovation in Design" },
    { value: 90, title: "Environmental Compliance" },
    { value: 100, title: "Quality Assurance" },
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
        <div className="tables-area">
          <div className="recent-queries">

          </div>
          <div className="admin-users">

          </div>

        </div>
    </>
  );
};

export default Dashboard;
