import { dummyFacilities } from "~/dummy/facilities";
import { dummyGames } from "~/dummy/games";

export const getAllGames = () => {
    const games = dummyGames;
    return games.map((game) => ({ ...game, facility: dummyFacilities.find((facility) => facility.id === game?.facilityId) }));
};

export const getGameById = (id: string) => {
    const game = dummyGames.find((game) => game.id === id);

    return { ...game, facility: dummyFacilities.find((facility) => facility.id === game?.facilityId) };
};

export const getRandomGames = (count: number = 10) => {
    const games = dummyGames.sort(() => Math.random() - 0.5).slice(0, count);
    return games.map((game) => ({ ...game, facility: dummyFacilities.find((facility) => facility.id === game?.facilityId) }));
};

export const getGamesBySportType = (sportType: string) => {
    const games = dummyGames.filter((game) => game.sportType === sportType);
    return games.map((game) => ({ ...game, facility: dummyFacilities.find((facility) => facility.id === game?.facilityId) }));
};