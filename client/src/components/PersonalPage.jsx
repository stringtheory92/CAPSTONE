import React from "react";

function PersonalPage() {
  const infoContainerStyles = {
    display: "flex",
    fontSize: "1.8rem",
    width: "100%",
    lineHeight: "5rem",
  };

  const leftStyles = {
    maxWidth: "10rem",
  };
  const rightStyles = {
    maxWidth: "35rem",
  };

  return (
    <div style={{ color: "white" }}>
      <h1 style={{ margin: "2rem" }}>Thank you for viewing my app!</h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Keep in touch:</p>
      <div className="infoContainer" style={infoContainerStyles}>
        <div className="left" style={leftStyles}>
          <ul>
            <li>Github</li>
            <li>LinkedIn</li>
            <li>Medium</li>
            <li>Email</li>
          </ul>
        </div>
        <div className="right" style={rightStyles}>
          <ul>
            <li>https://github.com/stringtheory92</li>
            <li>https://www.linkedin.com/in/adamkabak/</li>
            <li>https://medium.com/@adamkabak_82553</li>
            <li>adamkabak@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PersonalPage;
