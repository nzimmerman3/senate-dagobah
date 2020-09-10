import React, { useState } from "react";
import history from "../history";
import Attribution from "./Attribution";

const validate = (ally) => {
  return ally.length === 9 && !isNaN(ally);
};

function Home() {
  const [ally, setAlly] = useState("");
  const [invalid, setInvalid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate(ally)) {
      setInvalid(true);
      return;
    }
    history.push({ pathname: "/results", state: { ally } });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Roster Lookup</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Ally Code:{" "}
          <input
            type="text"
            value={ally}
            onChange={(e) => setAlly(e.target.value)}
          ></input>
        </label>
        <div>
          {invalid ? <p>Invalid ally code</p> : <br />}

          <input type="submit" value="Search" className="btn btn-dark"></input>
        </div>
      </form>
      <Attribution />
    </div>
  );
}

export default Home;
