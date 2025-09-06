import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React + Node.js</h1>
      <p>ข้อความจาก Backend: {message}</p>
    </div>
  );
}

export default App;
