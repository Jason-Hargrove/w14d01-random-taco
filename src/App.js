import { useState } from "react";
import './App.css';

function App(props) {
  const [name, updateName] = useState("Jason")
    return (
    <div className="page-wrapper">
      <h2>Hypatia App</h2>
    </div>
  );
}

export default App;
