import React, {useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import localForage from 'localforage';
import axios from 'axios';

const unixTime= Math.round(+new Date()/1000);

const addSecondData = async ()=>{
    try {
        const {data} = await axios.get('https:jsonplaceholder.typicode.com/comments');
        return data ;
    } catch (error) {
        console.log(error);
    }
}


export default function SecondApi() {
    const [unixName1 , setName1]= useState("0.0.0");
    const [unixName2 , setName2]= useState("0.0.0");
    const [unixName3 , setName3]= useState("0.0.0");
    const [unixName4 , setName4]= useState("0.0.0");

    const setDatatoStorage = async()=>{
      setName1(unixTime)
        try {
            setName2(unixTime)
            const d = await addSecondData();
            // localStorage.setItem('data2', JSON.stringify(d));
            localForage.setItem('data2', d);
            setName3(unixTime)
        }
        catch (error) {
            console.log(error);
        }
        setName4(unixTime)
    }
    return (
        <div >
<Col className="first_row_second_column">
    <Row>Start Time :            {unixName1}</Row>
    <Row>End Time :         {unixName2}</Row>
    <Row>Start Save :    {unixName3}</Row>
    <Row>End Save :      {unixName4}</Row> 
    </Col>
   <br></br>
         <Button className='btn btn-danger' onClick={()=>setDatatoStorage()}>Second Api Call</Button>
        </div>
    )
}
