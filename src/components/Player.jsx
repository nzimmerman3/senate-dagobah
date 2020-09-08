import React, { useEffect, useState } from "react";
import axios from "../axios";

function Player({ ally }) {
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    async function fetch() {
      const response = await axios.get(`/player/${ally}/`);
      console.log(response);
      // setPlayers(response.data.players);
      return response;
    }
    fetch();
  }, []);
  return <div></div>;
}

export default Player;
