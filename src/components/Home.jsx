import React from "react";

function Home({ ally, setAlly, setReady, ready }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    setReady(true);
  };

  return (
    <div>
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
      <div className="attribute" style={{ position: "absolute", bottom: "0" }}>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/nhor-phai" title="Nhor Phai">
          Nhor Phai
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}

export default Home;
