import React, { useState, useEffect } from "react";
import axios from "../axios";
import request from "../request";
import TeamInfo from "./TeamInfo";
import teams from "../teams";
import history from "../history";
import Loading from "./Loading";

function TeamsPage(props) {
  const [units, setUnits] = useState([]);
  const ally = Object.is(props.location.state, undefined)
    ? history.push("/")
    : props.location.state.ally;

  useEffect(() => {
    let mounted = true;
    async function fetch() {
      try {
        const response = await axios.get(request.fetchPlayer(ally));
        setUnits(response.data.units);
      } catch (err) {
        history.push({ pathname: "/noally", state: { ally } });
      }
    }
    if (mounted) fetch();

    return () => (mounted = false);
  }, [ally]);

  const matchingUnitsArray = teams
    .map((team) => {
      const matchingUnits = units
        //Get matching team
        .filter((unit) => team.includes(unit.data.base_id))
        //Sort each team by power
        .sort(function (a, b) {
          return b.data.power - a.data.power;
        });
      return { team: matchingUnits, name: team[0] };
    })
    //Sort teams by power of best character
    .sort(function (a, b) {
      if (a.team.length > 0 && b.team.length > 0) {
        return b.team[0].data.power - a.team[0].data.power;
      } else {
        return true;
      }
    });

  return (
    <div className="teams-display">
      {units.length === 0 ? (
        <Loading />
      ) : (
        matchingUnitsArray.map(({ team, name }) => {
          return team.length > 0 ? (
            <TeamInfo key={name} team={team} teamName={name} />
          ) : (
            <div key={name}></div>
          );
        })
      )}
    </div>
  );
}

export default TeamsPage;
