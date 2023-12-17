import React from 'react'
import styles from '../styles/login.css'
import {useNavigate} from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';


const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [apiData, setApiData] = useState(null); // new state variable for storing the API response
    const navigate= useNavigate();
    const handleSubmit= async(e) => {
        e.preventDefault();
        if (!username || !password) {
            alert('Username and password cannot be empty');
            return;
        }
        try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('DATA FROM API',response.data);
        setApiData(response.data); // set the API response data
        if(response.data){
            navigate('/home',{state: {data:response.data}})
        }else{
            console.log('Error Fetching data');
        }
       
        }
        catch (error){
            console.error('Errror fetching data:',error);
        }
      
    };
    
    
  return (
    
      <>
        <div className="myloginpage">
          <div className="myusernamebox">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="myusername">
                <label className="labelusername" >UserName:</label>
                <input type="name" className="inputusername" value={username} onChange={(e) => setUsername(e.target.value)}/>
              </div>
              <div className="mypassword">
                <label className="labelpassword">Password:</label>
                <input type="password" className="inputpassword" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <button className="myloginbutton" type="submit">Login</button>
            </form>
          </div>
        </div>
      </>

  )
}

export default Login