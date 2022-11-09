import App from "./App";
import Listing from "./Pages/Listing";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";



const Routes=[
    {
        path: "/",
    element: <App />,
    children:[
        {
            path: "listing",
            element: <Listing/>,
        },
        {
            path: "login",
            element: <Login/>,
        },
        {
            path: "signup",
            element: <Signup/>,
        }

    ]

    },
    ]
     export default Routes;