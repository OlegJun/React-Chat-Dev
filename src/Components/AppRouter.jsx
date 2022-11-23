import React, {useContext} from 'react';
import {Route, Navigate, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";


function AppRouter(props) {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return user ?
        (
            <Routes>
                {privateRoutes.map(({path, component}) =>
                    <Route
                        path={path}
                        element={component}
                        key={path}
                    />
                )}
                <Route
                    path="/*"
                    element={<Navigate to={CHAT_ROUTE} replace />}
                />
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({path, component}) =>
                    <Route
                        path={path}
                        element={component}
                        key={path}
                    />
                )}
                <Route
                    path="/*"
                    element={<Navigate to={LOGIN_ROUTE} replace />}
                />
            </Routes>
        )

}

export default AppRouter;