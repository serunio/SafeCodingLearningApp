import {Navigate, Outlet} from "react-router-dom";
import {useContext} from "react";
import {AuthorizationContext} from "../Utility/AuthorizationContext.jsx";

export default function ProtectedLayout() {
    const {user} = useContext(AuthorizationContext)
    if (user === null)
        return <Navigate to={'/login'} replace/>
    return <Outlet/>
}