import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, editeSingleUser, updateUser } from '../../actions';
import '../curd/user.css'


const EditeUser = () => {
    let history = useHistory();
    let  dispatch = useDispatch();
    const [state, setState] = useState({
        name: "",
        email: "",
        phone: ""
    });
    const { name, email, phone } = state;
    const [error, setError] =useState("");
    let {id} = useParams()
   const {user} = useSelector((state) => state.data);

    useEffect(()=>{
        dispatch(editeSingleUser(id));
    }, []);

    useEffect(()=>{
        if(user){
            setState({...user});
        }
    }, [user])
    const handleInputeChange =(e) => {
        let {name, value} = e.target;
        setState({...state,[name]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name || !email || !phone){
            setError("plase fill all input field")
        }else{
            dispatch(updateUser(state, id));
            history.push("/user");
            setError("");
        }
    }


    return (

        <>
        <div className="form">
            <Button variant="contained"  color="success" onClick={() => history.push("/user")}>GO BACK</Button>
            <h2>EDITE USER</h2>
            {error && <h3 style={{color:"red"}}>{error}</h3>}
                
                <form onSubmit={handleSubmit}  >
                <TextField id="outlined" label="Name" 
                value={name || ""} type="text" name="name" onChange={handleInputeChange} />
                <br></br>
                <TextField id="outlined" label="Email" 
                value={email || ""} type="email"  name="email" onChange={handleInputeChange} />
                <br></br>
                <TextField id="outlined" label="Phone" name="phone" 
                 value={phone || ""} type="number" onChange={handleInputeChange}  />
                <br></br>
                <Button variant="contained" color="success" type="submit">UPDATE</Button>
                </form>
                </div>
       </>
    )
}

export default EditeUser
