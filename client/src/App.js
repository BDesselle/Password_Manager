import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");

  const addCredentials = () => {
    Axios.post("http://localhost:3000/add_credentials", {
      title: title,
      password: password,
    });
  };

  return (
    <div className="App">
      <div className="CredentialCreation">
        <input
          type="text"
          placeholder="Ex. Facebook"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Ex. password123"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={addCredentials}>Add Credentials</button>
      </div>
    </div>
  );
}

export default App;
