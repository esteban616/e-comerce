import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import "./styles/Login.css";
import { Link, Navigate } from "react-router-dom";

export const Login = () => {
  const { register, reset, handleSubmit } = useForm();

  const { loginUser ,hasError} = useAuth();
  const user=JSON.parse(localStorage.getItem("user"))

  const handleLogOut=()=>{
    localStorage.clear()
  }
  const submit = (data) => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users/login";
    loginUser(url, data);
    reset({
      email: "",
      password: "",
    });
   
  };

  const handleLogin=()=>{
    if (!hasError) {
       <Navigate to="/" />
     }
  }
  if (localStorage.getItem("token")) {
    return (
    <div className="login_card">
    <div className="login">
      <div className="login_img-container">
        <img className="login_img" src="/user.png" alt="" />
      </div>
      <h3>{user.firstName} {user.lastName}</h3>
      <Link onClick={handleLogOut} to="/">Log Out</Link>
    </div>
  </div>
    );
  } else {
    return (
      <div className="login_card">
        <form className="login_form" onSubmit={handleSubmit(submit)}>
          <h2>Login</h2>
          <div className="login_item">
            <label htmlFor="email">Email</label>
            <input {...register("email")} type="email" id="email" />
          </div>
          <div className="login_item">
            <label htmlFor="password">Password</label>
            <input {...register("password")} type="password" id="password" />
          </div>
          <button onClick={handleLogin} className="login_btn"><Link to={!hasError?"/":""}>Login</Link></button>
        </form>
      </div>
    );
  }
};
