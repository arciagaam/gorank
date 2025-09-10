import { dummyPlayers } from "~/dummy/player"

export const getPlayerById = (id: string) => {
    const player = dummyPlayers.find((player) => player.id === id);
    return player
};

export const getAllPlayers = () => {
    return dummyPlayers;
};

