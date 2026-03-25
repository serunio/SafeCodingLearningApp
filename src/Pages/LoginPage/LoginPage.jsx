import {useContext} from "react";
import {AuthorizationContext} from "../../Utility/AuthorizationContext.jsx";
import {useNavigate} from "react-router-dom";

export default function LoginPage() {
    const {setUser} = useContext(AuthorizationContext)
    const navigate = useNavigate()
    if(setUser === null)
        return null
    const login = () => {
        setUser('user')
        navigate('/')
    }

    return <button onClick={login}>Login</button>
}