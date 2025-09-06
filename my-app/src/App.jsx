import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>NextHome</h1>
      <div>
        <nav>
          <ul>
            <li><a href="#">Sell a House</a></li>
            <li><a href="#">Properties</a></li>
            <li><a href="#">Renovated Houses</a></li>
            <li><a href="#">Investment</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
