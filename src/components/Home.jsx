import React from "react";

function Home({ ally, setAlly, setReady, ready }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    setReady(true);
  };

  return (
    <div>
      <h1>146523987</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Ally Code:
          <input
            type="text"
            value={ally}
            onChange={(e) => setAlly(e.target.value)}
          ></input>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default Home;
