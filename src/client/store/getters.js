// Events
export const getLoadingState = state => state.events.loading;

// Matches
export const getMatches = state => state.matches.all;
export const getMatchInProgress = state => state.matches.current.inProgress;

// Players
export const getAllPlayers = state => state.players.all;
export const getCurrentPlayer = state => state.players.current;
