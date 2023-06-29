import { Navigate, Outlet } from "react-router-dom"

const Protectetroutes = () => {
  if (localStorage.getItem("token")) {
    return <Outlet />
  }else{
    return <Navigate to="/login"/>
  }
   
}

export default Protectetroutes