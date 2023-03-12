import Error404 from "../components/Error404";
import Home from "../ui/Home";
import Dashboard from "../ui/Dashboard/Home";

export const Links = [
    {
        name: "Home",
        path: "/",
        element: <Home />,
        showInNavigation: false
    },
    {
        name: "Dashboard",
        path: "/",
        element: <Dashboard />,
        showInNavigation: true
    },
    {
        name: "Error404",
        path: "*",
        element: <Error404 />,
        showInNavigation: false
    }
];