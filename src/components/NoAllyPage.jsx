import React from "react";
import history from "../history";

export default function NoAllyPage(props) {
  if (Object.is(props.location.state, undefined)) history.push("/");

  return (
    <div className="no-ally">
      <h3>
        Player with ally code: {props.location.state.ally} could not be found
      </h3>
      <img
        src="/favicon.ico"
        alt="logo"
        height="160px"
        width="160px"
        style={{ marginTop: "10px", marginBottom: "10px" }}
      />
      <h5>It is likely that they do not have a swgoh.gg account</h5>
    </div>
  );
}
