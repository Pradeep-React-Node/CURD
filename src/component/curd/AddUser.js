import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { textAlign } from '@mui/system';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUser } from '../../actions';
import '../curd/user.css'

const AddUser = () => {
    let history = useHistory();
    let  dispatch = useDispatch();
    const [state, setState] = useState({
        name: "",
        email: "",
        phone: ""
    });
    const { name, email, phone } = state;
    const [error, setError] =useState("");
    const handleInputeChange =(e) => {
        let {name, value} = e.target;
        setState({...state,[name]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name || !email || !phone){
            setError("plase fill all input field")
        }else{
            dispatch(addUser(state));
            history.push("/user");
            setError("");
        }
    }


    return (

        <>
        <div className="form">
            <Button variant="contained" color="success" onClick={() => history.push("/user")}>GO BACK</Button>
            
            {error && <h3 style={{color:"red"}}>{error}</h3>}
          
                <form onSubmit={handleSubmit}>
                <TextField id="outlined" label="Name" variant="outlined" 
                value={name} type="text" name="name" onChange={handleInputeChange} />
                <br></br>
                <TextField id="outlined" label="Email" variant="outlined" 
                value={email} type="email"  name="email" onChange={handleInputeChange} />
                <br></br>
                <TextField id="outlined" label="Phone" name="phone" variant="outlined" 
                 value={phone} type="number" onChange={handleInputeChange}  />
                <br></br>
                <Button variant="contained" color="success" type="submit" >ADD</Button>
                </form>
                </div>
        </>
    )
}

export default AddUser
