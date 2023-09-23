import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log("Effect is running");

  }, [name, mobile]); // Include name and mobile in the dependency array

  return (
    <div>
      <input
        id="name"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        id="mobile"
        placeholder="Mobile"
        onChange={(e) => setMobile(e.target.value)}
      />
      <div className="darkmode">
        <input
          type="checkbox"
          id="darkMode"
          onChange={() => setDarkMode(!darkMode)}
        />
        Enable dark mode
      </div>
    </div>
  );
}

export default App;
