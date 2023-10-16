import React, { useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    // loadScript("http://localhost:8081/PopCity3D/PopCity3D.js");
  }, [])
  return (
    <div style={{ background: "#f00" }} className={"app"}>
      子应用
    </div>
  );
};

export default App;
