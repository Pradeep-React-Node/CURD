import React, {useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import localforage from 'localforage';
import axios from 'axios';
// import '../App.css';

const unixTime= Math.round(+new Date()/1000);

const addThirdData = async ()=>{
    try {
        const {data} = await axios.get('https:jsonplaceholder.typicode.com/comments');
        return data ;
    
    } catch (error) {
        throw error
    }
}

export default function ThirdApi() {
    const [unixName , setName]= useState("0.0.0");
    const [unixNam , setNam]= useState("0.0.0");
    const [unixNa , setNa]= useState("0.0.0");
    const [unixN , setN]= useState("0.0.0");
  
    const setDatatoStorage = async()=>{
        setName(unixTime)
        try {
            setNam(unixTime)
            const d = await addThirdData();
            localforage.setItem('data3',d);
            setNa(unixTime)
        } catch (error) {
            console.log(error);
        }
        setN(unixTime)
    }
    return (
        <div >
    <Col className="first_row_second_column">
    <Row>Start Time : {unixName}</Row>
    <Row>End Time : {unixNam}</Row>
    <Row>Start Save :{unixNa}</Row>
    <Row>End Save : {unixN}</Row> 
    </Col>
    <br></br>
        <Button className='btn btn-danger '  onClick={()=>setDatatoStorage()}>Third Api Call</Button>
        </div>
    )
}