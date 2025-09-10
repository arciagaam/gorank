import React, { useEffect, useState } from 'react'
import { getClubById } from '~/services/club';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router';
import { Clock, DotIcon, Globe, MapPin, Play, Star, Trophy, User, User2 } from 'lucide-react';
import { toTitleCase } from '~/lib/string';
import ThemedButton from '~/components/button/themed-button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import type { Club } from '~/schema/club';
import { dummyPlayers } from '~/dummy/player';
import type { ComprehensivePlayer } from '~/schema/player';
import { useAuth } from '~/context/auth-provider';
import { getAllPlayers } from '~/services/player';
import { Button } from '~/components/ui/button';
import { getRandomGames } from '~/services/game';
import type { Game } from '~/schema/game';
import { Badge } from '~/components/ui/badge';
import { StarRating } from '~/components/ui/star-rating';
import { getReviewsByClubId, getAverageRating, getRatingDistribution } from '~/dummy/reviews';
import type { Review } from '~/schema/review';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateReviewSchema, type CreateReview } from '~/schema/review';
import { Form, FormControl, FormField, FormItem, FormMessage } from '~/components/ui/form';
import { Textarea } from '~/components/ui/textarea';

export default function ViewClub() {

    const { id } = useParams();
    const { joinedClubs, joinClub, leaveClub } = useAuth();
    const [searchParams] = useSearchParams();

    const navigate = useNavigate();

    if (!id) {
        return <div>Club not found</div>
    }

    const club = getClubById(id);

    if (!club) {
        return <div>Club not found</div>
    }


    useEffect(() => {
        const join = searchParams.get('join');

        if (join) {
            joinClub(club.id);
            navigate(`/clubs/${club.id}`, { replace: true });
        }
    }, [searchParams])

    const isJoined = joinedClubs.includes(club.id);

    return (
        <div className="flex flex-col gap-10 py-10 px-36">

            <div className="flex flex-col gap-5">
                <div className="flex flex-col relative rounded-3xl rounded-tr-[15rem] bg-gray-100 w-full h-[40vh] bg-no-repeat bg-cover" style={{ backgroundImage: `url(${club.banner})` }}>
                    <img src={club.logo} alt={club.name} className="absolute bottom-0 left-4 h-[200px] w-auto translate-y-1/2" />
                </div>

                <div className="flex ml-[250px] flex-1 justify-between">

                    <div className="flex flex-col">
                        <h1 className="text-4xl font-bold">{club.name}</h1>
                        <div className="flex items-center gap-2 text-gray-400">
                            <p>{toTitleCase(club.visibility)}</p>
                            <DotIcon />
                            <p>{club.members} Members</p>
                            <DotIcon />
                            <p>Rank {club.rank}</p>
                        </div>
                    </div>

                    {
                        !isJoined ? (
                            <ThemedButton onClick={() => joinClub(club.id)}>Join Club</ThemedButton>
                        ) :
                            (

                                <ThemedButton variant='secondary' onClick={() => leaveClub(club.id)}>Leave Club</ThemedButton>

                            )
                    }

                    {/* <ThemedButton onClick={() => joinClub(club.id)}>{isJoined ? 'Joined' : 'Join Club'}</ThemedButton> */}
                </div>
            </div>

            <Tabs defaultValue="about">
                <TabsList className="mt-10 bg-transparent flex gap-8 border-b border-gray-200 rounded-none w-full justify-between pb-4">
                    <div className="flex gap-8">
                        <TabsTrigger className="cursor-pointer bg-transparent !p-0 !shadow-none !outline-none !border-none data-[state=active]:font-bold" value="about">About</TabsTrigger>
                        {
                            isJoined && (
                                <>
                                    <TabsTrigger className="cursor-pointer bg-transparent !p-0 !shadow-none !outline-none !border-none data-[state=active]:font-bold" value="members">Members</TabsTrigger>
                                    <TabsTrigger className="cursor-pointer bg-transparent !p-0 !shadow-none !outline-none !border-none data-[state=active]:font-bold" value="games">Games</TabsTrigger>
                                    <TabsTrigger className="cursor-pointer bg-transparent !p-0 !shadow-none !outline-none !border-none data-[state=active]:font-bold" value="events">Events</TabsTrigger>
                                    <TabsTrigger className="cursor-pointer bg-transparent !p-0 !shadow-none !outline-none !border-none data-[state=active]:font-bold" value="reviews">Reviews</TabsTrigger>
                                </>
                            )
                        }
                    </div>
                </TabsList>

                <TabsContent value="about"><ClubAbout club={club} /></TabsContent>
                {
                    isJoined && (
                        <>
                            <TabsContent value="members"><ClubMembers club={club} /></TabsContent>
                            <TabsContent value="games"><ClubGames club={club} /></TabsContent>
                            <TabsContent value="events"><ClubEvents club={club} /></TabsContent>
                            <TabsContent value="reviews"><ClubReviews club={club} /></TabsContent>
                        </>
                    )
                }
            </Tabs>
        </div>
    )
}

const ClubAbout = ({ club }: { club: Club }) => {
    return (
        <div className="flex flex-col gap-10">

            <div className="flex flex-col gap-5">
                <h2 className='text-lg font-semibold'>About this club</h2>
                <p>A passionate and driven community of individuals united by teamwork, discipline, and the spirit of competition. Rooted in the heart of Quezon City, our club is built on a strong foundation of camaraderie, perseverance, and excellence both on and off the field. Whether you're here to compete, train, or simply be part of something bigger than yourself, the Slammers offer a home for all who are willing to push their limits and support one another. We believe in fostering talent, building character, and representing our city with pride. Join the Slammers – where every slam is powered by heart, hustle, and hometown pride.</p>
            </div>

            <div className="flex flex-col gap-5">
                <div className="flex gap-2 items-start">
                    <Globe height={18} />

                    <div className="flex flex-col">
                        <h3 className='leading-none font-medium text-base'>{toTitleCase(club.visibility)}</h3>
                        <p className="text-sm text-gray-500">Anyone can see this club.</p>
                    </div>
                </div>

                <div className="flex gap-2 items-start">
                    <Clock height={18} />

                    <div className="flex flex-col">
                        <h3 className='leading-none font-medium text-base'>History</h3>
                        <p className="text-sm text-gray-500">Club created on {club.history.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                </div>


                <div className="flex gap-2 items-start">
                    <Play height={18} />

                    <div className="flex flex-col">
                        <h3 className='leading-none font-medium text-base'>Matches Played</h3>
                        <p className="text-sm text-gray-500">{club.matchesPlayed} matches played</p>
                    </div>
                </div>

                <div className="flex gap-2 items-start">
                    <Star height={18} />

                    <div className="flex flex-col">
                        <h3 className='leading-none font-medium text-base'>Reviews</h3>
                        <p className="text-sm text-gray-500">Club has {club.reviews} reviews</p>
                    </div>
                </div>

                <div className="flex gap-2 items-start">
                    <MapPin height={18} />

                    <div className="flex flex-col">
                        <h3 className='leading-none font-medium text-base'>Location</h3>
                        <p className="text-sm text-gray-500">{club.location}</p>
                    </div>
                </div>

                <div className="flex gap-2 items-start">
                    <User height={18} />

                    <div className="flex flex-col gap-4">
                        <h3 className='leading-none font-medium text-base'>Admin</h3>
                        <div className="flex gap-2">
                            <User2 />

                            <div className="flex flex-col">
                                <p className='font-medium text-sm'>Kubi Brayan</p>
                                <p className='text-sm text-gray-500'>Club Administrator</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-5">
                <h2 className='text-lg font-semibold'>Teams</h2>

                <div className="flex gap-10">
                    <img src="/images/clubs-logo/atlanta-hawks-logo.png" alt="Teams" className='h-24 w-24' />
                    <img src="/images/clubs-logo/charlotte-hornets-logo.png" alt="Teams" className=' h-24 w-24' />
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <h2 className='text-lg font-semibold'>Achievements</h2>

                <div className="flex gap-10">
                    <Trophy size={42} />
                    <Trophy size={42} />
                </div>
            </div>

        </div>
    )
}

const ClubMembers = ({ club }: { club: Club }) => {

    const players = getAllPlayers();

    const [showAllPlayers, setShowAllPlayers] = useState(false);
    return (
        <div className="flex flex-col gap-5 my-10 w-full">
            <div className="flex flex-col">
                <h2 className='text-lg font-semibold'>Admin</h2>
                <div className="flex gap-2">
                    <User2 />

                    <div className="flex flex-col">
                        <p className='text-sm text-gray-500'>Kubi Brayan</p>
                        <p className='text-sm text-gray-500'>Club Administrator</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <h2 className='text-lg font-semibold'>Players</h2>


                <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-5 gap-5">
                        {
                            players.slice(0, showAllPlayers ? players.length : 5).map((player) => (
                                <PlayerCard key={player.id} player={player} >
                                    <Link to={`/profile/${player.id}`}>
                                        <ThemedButton variant='secondary'>View Profile</ThemedButton>
                                    </Link>
                                </PlayerCard>
                            ))
                        }
                    </div>
                    {players.length > 5 && (
                        <Button
                            variant="outline"
                            onClick={() => setShowAllPlayers(!showAllPlayers)}
                            className="self-start"
                        >
                            {showAllPlayers ? 'Show Less' : `Show More (${players.length - 5} more)`}
                        </Button>
                    )}
                </div>

            </div>


            <div className="flex flex-col gap-5 w-full">

                <h2 className='text-lg font-semibold'>Invite Members</h2>


                <div className="grid grid-cols-5 gap-5">
                    {
                        dummyPlayers.slice(0, 5).map((member) => (
                            <PlayerCard key={member.id} player={member} >
                                <ThemedButton variant='secondary'>Invite</ThemedButton>
                            </PlayerCard>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}

const ClubGames = ({ club }: { club: Club }) => {

    const clubLogos = [
        '/images/clubs-logo/atlanta-hawks-logo.png',
        '/images/clubs-logo/charlotte-hornets-logo.png',
        '/images/clubs-logo/chicago-bulls-logo.png',
        '/images/clubs-logo/cleveland-cavaliers-logo.png',
        '/images/clubs-logo/los-angeles-lakers-logo.png'
    ];

    const pastGames = getRandomGames(3).map(game => ({
        ...game,
        dateEnded: new Date(game.endDate.getTime() + Math.random() * 24 * 60 * 60 * 1000),
        teamA: {
            name: `Team ${Math.random() > 0.5 ? 'Alpha' : 'Beta'}`,
            finalScore: Math.floor(Math.random() * 30) + 10,
            logo: clubLogos[Math.floor(Math.random() * clubLogos.length)]
        },
        teamB: {
            name: `Team ${Math.random() > 0.5 ? 'Gamma' : 'Delta'}`,
            finalScore: Math.floor(Math.random() * 30) + 10,
            logo: clubLogos[Math.floor(Math.random() * clubLogos.length)]
        }
    }));


    return (
        <div className="flex flex-col gap-5 items-center my-10 w-full">
            <div className="flex flex-col rounded-xl shadow w-full p-10 gap-5 bg-white border border-gray-200">
                <h2 className='font-semibold text-xl'>Upcoming Games</h2>

                <p className='text-sm text-gray-500'>No Games Yet</p>
            </div>

            <div className="flex flex-col rounded-xl shadow w-full p-10 gap-5 bg-white border border-gray-200">
                <h2 className='font-semibold text-xl'>Past Games</h2>

                <div className="grid grid-cols-4 gap-5">
                    {
                        pastGames.map((game) => (
                            <ClubGamesCard key={game.id} game={game} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const ClubGamesCard = ({ game }: { game: Game & { teamA: { name: string, finalScore: number, logo: string }, teamB: { name: string, finalScore: number, logo: string } } }) => {
    return (
        <div className="flex flex-col min-h-[200px] justify-between p-2 rounded-2xl overflow-clip bg-contain bg-gray-100" style={{ backgroundImage: `url(${game.image})` }}>

            <Badge className='bg-white text-black'><MapPin /> Location: {game.facility?.name}</Badge>

            <div className="flex bg-black/50 backdrop-blur-lg text-white p-2 rounded-lg w-full justify-between items-center">

                <div className="flex flex-col items-center text-center">
                    <img src={game.teamA.logo} alt={game.teamA.name} className='h-10' />
                    <p className='text-sm'>{game.teamA.name}</p>
                </div>

                <div className="flex flex-col items-center text-center text-xs">

                    <p>{game.name}</p>

                    <p>{game.teamA.finalScore} - {game.teamB.finalScore}</p>

                    <p>{game.endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>

                </div>

                <div className="flex flex-col items-center text-center">
                    <img src={game.teamB.logo} alt={game.teamB.name} className='h-10' />
                    <p className='text-sm'>{game.teamB.name}</p>
                </div>


            </div>
        </div>
    )
}


const ClubEvents = ({ club }: { club: Club }) => {
    return (
        <div className="flex flex-col gap-5 items-center my-10 w-full">
            <div className="flex flex-col rounded-xl shadow w-full p-10 gap-5 bg-white border border-gray-200">
                <h2 className='font-semibold text-xl'>Upcoming Events</h2>

                <p className='text-sm text-gray-500'>No Events Yet</p>
            </div>

            <div className="flex flex-col rounded-xl shadow w-full p-10 gap-5 bg-white border border-gray-200">
                <h2 className='font-semibold text-xl'>Past Events</h2>

                <p className='text-sm text-gray-500'>No Events Yet</p>
            </div>
        </div>
    )
}

const PlayerCard = ({ player, children }: { player: ComprehensivePlayer, children?: React.ReactNode }) => {
    return (
        <div className="flex flex-col items-center gap-4 rounded-2xl shadow p-5 bg-white border border-gray-200">
            <img src={player.avatar} alt={player.name} className="h-20" />
            <p>{player.name}</p>

            {children}
        </div>
    )

}

const ClubReviews = ({ club }: { club: Club }) => {
    const reviews = getReviewsByClubId(club.id);
    const averageRating = getAverageRating(reviews);
    const ratingDistribution = getRatingDistribution(reviews);
    const totalRatings = reviews.length;

    const [userRating, setUserRating] = useState(0);
    const [reviewsToShow, setReviewsToShow] = useState(2);

    const form = useForm<CreateReview>({
        resolver: zodResolver(CreateReviewSchema),
        defaultValues: {
            rating: 0,
            comment: '',
        },
    });

    const onSubmit = (data: CreateReview) => {
        console.log('Review submitted:', data);
        // Here you would typically submit the review to your backend
        form.reset();
        setUserRating(0);
    };

    const handleRatingChange = (rating: number) => {
        setUserRating(rating);
        form.setValue('rating', rating);
    };

    const showMoreReviews = () => {
        setReviewsToShow(reviews.length);
    };

    const showLessReviews = () => {
        setReviewsToShow(2);
    };

    if (reviews.length === 0) {
        return (
            <div className="flex flex-col gap-5 items-center my-10 w-full">
                <p className='text-sm text-gray-500'>No Reviews Yet</p>
            </div>
        );
    }

    return (
        <div className="flex gap-10 my-10 w-full">
            {/* Left Side - Rating Summary */}
            <div className="flex-1">
                <div className="flex flex-col">
                    <div className="text-6xl font-bold text-gray-900">{averageRating}</div>
                    <StarRating rating={averageRating} size="lg" />
                    <div className="text-sm text-gray-600">{totalRatings} ratings</div>

                    {/* Rating Breakdown */}
                    <div className="w-full space-y-2 mt-4">
                        {[5, 4, 3, 2, 1].map((stars) => {
                            const count = ratingDistribution[stars] || 0;
                            const percentage = totalRatings > 0 ? (count / totalRatings) * 100 : 0;

                            return (
                                <div key={stars} className="flex items-center gap-6">

                                    <div className="flex items-center gap-1">
                                        <Star className='fill-yellow-400 text-yellow-400' />
                                        <p className='text-sm font-medium'>{stars}</p>
                                    </div>
                                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-gray-900 h-2 rounded-full transition-all duration-300"
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>
                                    <span className="text-sm text-gray-600 w-8 whitespace-nowrap">({count})</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Right Side - Review Form and Existing Reviews */}
            <div className="flex-1 space-y-6">
                {/* Write a Review Form */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold mb-2">Write a Review</h3>
                    <p className="text-sm text-gray-600 mb-4">Share your thoughts!</p>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm">Rating:</span>
                                <StarRating
                                    rating={userRating}
                                    interactive={true}
                                    onRatingChange={handleRatingChange}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="comment"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Type something"
                                                className="min-h-[100px] resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <ThemedButton type="submit" className="w-full">
                                Submit
                            </ThemedButton>
                        </form>
                    </Form>
                </div>

                {/* Existing Reviews */}
                <div className="space-y-4">
                    {reviews.slice(0, reviewsToShow).map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}

                    {reviews.length > 2 && (
                        <div className="text-center">
                            {reviewsToShow < reviews.length ? (
                                <Button
                                    variant="outline"
                                    onClick={showMoreReviews}
                                    className="text-blue-600 border-blue-600 hover:bg-blue-50"
                                >
                                    Show More Reviews ({reviews.length - reviewsToShow} more)
                                </Button>
                            ) : (
                                <Button
                                    variant="outline"
                                    onClick={showLessReviews}
                                    className="text-blue-600 border-blue-600 hover:bg-blue-50"
                                >
                                    Show Less
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const ReviewCard = ({ review }: { review: Review }) => {
    return (
        <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-start gap-3">
                <div className="flex items-center gap-2">
                    <StarRating rating={review.rating} size="sm" />
                    <img
                        src={review.userAvatar}
                        alt={review.userName}
                        className="w-8 h-8 rounded-full object-cover"
                    />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{review.userName}</span>
                        <span className="text-xs text-gray-500">
                            {review.createdAt.toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{review.comment}</p>
                    {review.helpful > 0 && (
                        <div className="mt-2 text-xs text-gray-500">
                            {review.helpful} people found this helpful
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};