import React from "react";

const App: React.FC = () => {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#ff03"
    }}>
      主应用加载
      <div
        id="subapp"
        style={{
          width: "50vw",
          height: "50vh",
          backgroundColor: "#05f"
        }}
      ></div>
    </div>
  );
};

export default App;
