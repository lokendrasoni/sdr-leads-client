import Error404 from "../components/Error404";
import Home from "../ui/Home";
import Dashboard from "../ui/Dashboard/Home";
import Leads from "../ui/Dashboard/Leads";

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
        name: "Leads",
        path: "/leads",
        element: <Leads />,
        showInNavigation: true
    },
    {
        name: "Error404",
        path: "*",
        element: <Error404 />,
        showInNavigation: false
    }
];