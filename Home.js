import '../CSS Folder/Home.css';
import { useState } from "react";

function Home()
{
   const [formtype,setformtype]=useState({
    first_name:"",last_name:"",password:""
   });
   function changehandler(event){
    setformtype(preformtype => ({
        ...preformtype,
        [event.target.name]:event.target.value
    }))
   }
   
   function submithanlder(event)
   {
    event.preventDefault();
    alert("form submitted");
    setformtype({
        first_name:"",
        last_name:"",
        password:"",
   })
   

   }
    return(
        <div>
            <form onSubmit={submithanlder}>
                <label>First Name</label>
                <input 
                type="text"
                placeholder=" Enter FirstName"
                name="first_name"
                value={formtype.first_name}
                onChange={changehandler}
                required
                />
                
                <label>Last Name</label>
                <input 
                type="text"
                placeholder=" Enter LastName"
                name="last_name"
                value={formtype.last_name}
                onChange={changehandler}
                required
                />

                <label>Password</label>                
                <input 
                type="password"
                placeholder="Enter Password"
                name="password"
                value={formtype.password}
                onChange={changehandler}
                required
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default Home;