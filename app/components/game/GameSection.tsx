import type { Game } from "~/schema/game"
import { GameCard } from "./GameCard"

export const GameSection = ({ status, games }: { status: string, games: Game[] }) => {
    return (
        <div className="flex flex-col gap-3 md:gap-2">
            <h3 className="text-base md:text-lg font-semibold">{status}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    )
}