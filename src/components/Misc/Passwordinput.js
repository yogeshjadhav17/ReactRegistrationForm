import {React,useCallback, useEffect} from "react";
import { Component, useState } from "react";
import { useForm,Controller } from "react-hook-form";
import App from "../../App";
import { DropboxOutlined, EyeInvisibleOutlined,EyeOutlined } from "@ant-design/icons";
import "../../index.css";



export default function PasswordInput(){
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setvisible] = useState(false);


  const { register, handleSubmit,reset} = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      city:'',
      email:'',
      password:''
    },shouldUseNativeValidation:true
  });

const resetAsyncForm = useCallback(async () => {
  const result = await fetch("")    // no data added for fetch from json
  reset(result)   // asynchronously reset your  form values
}, [reset])


useEffect(() => {
  resetAsyncForm()

}, [resetAsyncForm])                  // to fetch data (async)
  return(
    <div className="container">
      <h3>Registration Form</h3>
      <form onSubmit={handleSubmit(console.log)} className="form">

<span className="s1">
    <label>First Name</label>
    <input  {...register("firstName", {maxLength: 14, required: "Enter First Name"})}
    value={firstname}
    type="text"
    style={{fontWeight:500}}
    id="firstname"
    placeholder="First name"
    onChange={(e) => setFirstname(e.target.value)}
    
  />
</span> <br/>

<span className="s2">
    <label>Last Name</label>
    <input {...register("lastName", {minLength: 3,required: "Enter Last Name"})}
    value={lastname}
    type="text"
    style={{fontWeight:500}}

    id="lastname"
    placeholder="Last name"
    onChange={(e) => setLastname(e.target.value)}
    
    />
</span>  <br/>

<span className="s3">
    <label>City</label>
    <select {...register("city", {required: "Field required"})} 
    value={city}
    type={DropboxOutlined}
    style={{fontWeight:500,  width:'350px',
      height: '50px'}}
    id="city"
    onChange={(e) => setCity(e.target.value)}


    placeholder="Enter City" >
              <option value="Select">Select</option>

        <option value="Mumbai">Mumbai</option>
        <option value="Chennai">Chennai</option>
        <option value="Pune">Pune</option>
        </select>
</span> <br/>

<span className="s4">
    <label>Email</label>
    <input type="text"{...register ("email", {required: "Enter Email"})}
    value={email}
    id="email"
    style={{fontWeight:500}}

    placeholder="Email"
    onChange={(e) => setEmail(e.target.value)}
    />
</span> <br/>




<div className="password">

<label htmlFor="password">
  Password


  </label>
  <input style={{ width:'350px',
  height:'40px',fontWeight:500}}
  value={password}
  type={visible ? "text" : "password"}{...register ("password", {required:"Enter Password"})}
  id="password"

  placeholder="Password"
  onChange ={(e) => setPassword(e.target.value)}
 
  />   
  <br/>

<span className="p-2" onClick={() => setvisible(!visible)}>  
{
  visible ? <EyeOutlined/> : <EyeInvisibleOutlined/>
}    
</span>
</div>
<br/> <br/>
<br/> <br/>
<div className="btn-container"><br/><br/><br/>
<button type="clear" value="clear" className="button2" onClick={() => {
  reset((result) => (
    {
   firstName:"",
   lastName:"",
   city:"",
   email:"",
   password:""
    }      
    ))
}}>Clear</button>

<br/><br/>
<button type="submit" value="submit" className="button" style={{float:'right'}} 
>Submit</button>


</div>

      </form>
      </div>
  );
  }
 