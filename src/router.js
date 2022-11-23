import {CHAT_ROUTE, LOGIN_ROUTE} from "./utils/consts";
import Login from "./Components/Login";
import Chat from "./Components/Chat/Chat";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        component: <Login/>
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        component: <Chat/>
    }
]