import React, {useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import localForage from 'localforage';
import axios from 'axios';

const unixTime= Math.round(+new Date()/1000);

const addFourthData = async ()=>{
    try {
        const {data} = await axios.get('https:jsonplaceholder.typicode.com/comments');
        return data;
    } catch (error) {
        throw error
    } 
}

export default function FourthApi(props) {
    const [name1 , setNew1]= useState("0.0.0");
    const [name2 , setNew2]= useState("0.0.0");
    const [name3 , setNew3]= useState("0.0.0");
    const [name4 , setNew4]= useState("0.0.0");
    const setDatatoStorage = async()=>{
            setNew1(unixTime)
        try {
            setNew2(unixTime)
            const d = await addFourthData();
            localForage.setItem('data4', d);
            setNew3(unixTime)
        } catch (error) {
            console.log(error);
        } setNew4(unixTime)
    }
    return (
        <div >

<Col className="first_row_second_column">
    <Row>Start Time : {name1}</Row>
    <Row>End Time : {name2}</Row>
    <Row>Start Save :{name3}</Row>
    <Row>End Save : {name4}</Row> 
    </Col>
    <br>
    </br>
<Button className='btn btn-warning mr-3' onClick={()=>setDatatoStorage()}>Fourth Api Call</Button>
        
        </div>
    )
   
}