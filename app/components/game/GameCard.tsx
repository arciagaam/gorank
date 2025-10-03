import type { Game } from "~/schema/game"
import ThemedBadge from "../badge/themed-badge"
import { CalendarIcon, DotIcon, Link, Timer, User } from "lucide-react"
import { formatDuration } from "~/lib/time"
import PlayerModal from "../player-modal/player-modal"
import ThemedButton from "../button/themed-button"

export const GameCard = ({ game }: { game: Game }) => {
    return (
        <div className="border border-gray-200 rounded-lg overflow-clip">
            <img src={game.image} alt={game.name} className="aspect-video" />

            <div className="flex flex-col gap-2 p-3 md:p-4">
                <ThemedBadge className="text-xs">{game.skillLevel.charAt(0).toUpperCase() + game.skillLevel.slice(1)} | {game.matchType.charAt(0).toUpperCase() + game.matchType.slice(1)}</ThemedBadge>
                <h3 className="text-base md:text-lg font-semibold line-clamp-2">{game.name}</h3>
                <p className="text-xs md:text-sm text-gray-500 line-clamp-1">{game.facility?.name}</p>

                <div className="flex flex-col text-xs gap-1.5 md:gap-2">
                    <div className="flex gap-1 items-center">
                        <CalendarIcon size={14} className="md:size-4" />
                        <p className="ml-1 text-xs md:text-sm">{game.startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                        <DotIcon size={14} className="md:size-4" />
                        <p className="text-xs md:text-sm">{new Date(`1970-01-01T${game.startTime}:00`).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })} - {new Date(`1970-01-01T${game.endTime}:00`).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}</p>
                    </div>

                    <div className="flex gap-1 items-center">
                        <Timer size={14} className="md:size-4" />
                        <p className="ml-1 text-xs md:text-sm">{formatDuration(game.startTime, game.endTime)}</p>
                    </div>

                    <div className="flex gap-1 items-center">
                        <User size={14} className="md:size-4" />
                        <p className="ml-1 text-xs md:text-sm">{game.players?.length || 0}/10</p>
                    </div>
                </div>

                <div className="flex gap-2 mt-3 md:mt-4">
                    <div className="flex gap-1">
                        {
                            game.players?.slice(0, 3).map((player) => (
                                <PlayerModal key={player.id} player={player}>
                                    <p className="flex items-center justify-center bg-gray-100 aspect-square size-8 md:size-10 rounded-lg md:rounded-xl text-sm cursor-pointer hover:bg-gray-200 overflow-clip">
                                        <img src={player.avatar} alt={player.name} className="h-full w-full object-cover" />
                                    </p>
                                </PlayerModal>
                            ))
                        }
                    </div>

                    <Link className="ml-auto w-fit" to={`/play/${game.id}`}>
                        <ThemedButton className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2">Join</ThemedButton>
                    </Link>
                </div>

            </div>
        </div>
    )
}