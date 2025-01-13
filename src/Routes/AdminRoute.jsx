import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isAdmin, isLoading] = useAdmin();
    const location = useLocation()
    if(loading ||isLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default AdminRoute;