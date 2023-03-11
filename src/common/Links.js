import Error404 from "../components/Error404";
import Home from "../ui/Home";

export const Links = [
    {
        name: "Home",
        path: "/",
        element: <Home />,
        showInNavigation: false
    },
    {
        name: "Error404",
        path: "*",
        element: <Error404 />,
        showInNavigation: false
    }
];