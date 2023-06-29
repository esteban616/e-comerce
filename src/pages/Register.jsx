import { useForm } from "react-hook-form"
import useAuth from "../Hooks/useAuth"
import "./styles/Register.css"
import { Link } from "react-router-dom"

const Register = () => {
 const {handleSubmit,reset,register}= useForm()

 const {createUser}= useAuth()

const submit=(data)=>{
   const url="https://e-commerce-api-v2.academlo.tech/api/v1/users"
   createUser(url,data)
   reset({
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    password:""
   })
}
  
    return (
    <div className="register_card">
        
        <form className="register_form" onSubmit={handleSubmit(submit)}>
            <h2>Register</h2>
            <div className="register_form-items">
                <label htmlFor="firstName">First name</label>
                <input {...register("firstName")} type="text" id="firstName"/>
            </div>
            <div className="register_form-items">
                <label htmlFor="lastName">Last name</label>
                <input {...register("lastName")} type="text" id="lastName"/>
            </div>
            <div className="register_form-items">
                <label htmlFor="email">Email</label>
                <input {...register("email")} type="email" id="email"/>
            </div>
            <div className="register_form-items">
                <label htmlFor="password">Password</label>
                <input {...register("password")} type="password" id="password"/>
            </div>
            <div className="register_form-items">
                <label htmlFor="phone">Phone</label>
                <input {...register("phone")} type="number" id="phone"/>
            </div>
            <button className="register_btn">Submit</button>
            <p>already registered? <Link className="register_link" to="/login">log in</Link></p>
        </form>
    </div>
  )
}

export default Register