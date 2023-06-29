import axios from "axios"
import { useState } from "react"

const useAuth = () => {
   const [hasError, setHasError] = useState(false)


 const createUser=(url,data)=>{
    axios.post(url,data)
    .then(res=>{
      console.log(res.data)
      setHasError(false)
    })
    .catch(err=> {
      console.log(err)
      setHasError(true)
   })
 }
 const loginUser =(url,data)=>{
    axios.post(url,data)
    .then(res=>{
         setHasError(false)
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("user",JSON.stringify(res.data.user))

    })
    .catch(err=> {
      console.log(err)
      setHasError(true)
   })
 }

 return{createUser,loginUser,hasError}
}

export default useAuth