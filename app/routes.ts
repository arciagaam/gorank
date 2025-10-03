import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";


const guestRoutes = [
    route("/lets-game", "layouts/auth-layout.tsx", [
        index("routes/auth/step-one.tsx"),
        route("step-two", "routes/auth/step-two.tsx"),
        route("step-three", "routes/auth/step-three.tsx"),
        route("step-four", "routes/auth/step-four.tsx"),
    ]),

]

const mainRoutes = [
    route("/", "routes/play/landing-page.tsx"),

    route("/play/:id", "routes/play/view-game.tsx"),
    route("/play/:id/chat", "routes/play/game-chat.tsx"),
    route("/play/:id/lobby", "routes/play/lobby.tsx"),

    route("/facilities", "routes/facilities/facilities.tsx"),
    route("/facilities/:id", "routes/facilities/view-facility.tsx"),
    route("/facilities/:id/create-game", "routes/facilities/create-game.tsx"),

    route("/clubs", "routes/club/clubs.tsx"),
    route("/clubs/create", "routes/club/create-club.tsx"),
    route("/clubs/:id", "routes/club/view-club.tsx"),

    route("/leaderboards", "routes/leaderboards/leaderboards.tsx"),

    route("/profile", "routes/profile/profile.tsx"),
    route("/profile/:id", "routes/profile/view-profile.tsx"),
]
export default [layout("layouts/main-auth-layout.tsx", [layout("layouts/main-layout.tsx", mainRoutes), ...guestRoutes])] satisfies RouteConfig;