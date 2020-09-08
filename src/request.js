const GUILD_ID = "68989";
const ALLY = "146523987";

const fetchGuild = (guildID) => {
  return `/guild/${guildID}/`;
};

const fetchGac = (allyID, sessionID) => {
  return `/player/${allyID}/gac/${sessionID}/`;
};

const fetchApi = () => {
  return `/`;
};

const fetchPlayer = (allyID = ALLY) => {
  return `/player/${allyID}/`;
};

const requests = {
  fetchGuild,
  fetchGac,
  fetchApi,
  fetchPlayer,
};

export default requests;
