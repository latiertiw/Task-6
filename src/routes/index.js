import StartPage from "../components/StartPage";
import ActorsPage from "../components/ActorsPage";

const routes = [
    {
        path: "/actors",
        component: ActorsPage,
        exact: true
    },
    {
        path: "/",
        component: StartPage,
        exact: true
    }
]

export default routes