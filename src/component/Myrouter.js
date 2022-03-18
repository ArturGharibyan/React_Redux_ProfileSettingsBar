import { BrowserRouter,Routes,Route } from "react-router-dom"
import Profile from "../container/Profile"



const Myrouter = ()=>{
    return(
        <div>
            <BrowserRouter>
            <Profile/>
            <Routes>
            </Routes>
            </BrowserRouter>
       
        </div>
    )
}

export default Myrouter