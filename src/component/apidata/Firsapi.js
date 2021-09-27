import React, {useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import localForage from 'localforage';
import axios from 'axios';


const unixTime= (new Date()/1000);


// start fetching data from api 
export const addFirstData = async ()=>{
    try {
        var unix= unixTime;
        console.log(unix)
        const {data} = await axios.get('https:jsonplaceholder.typicode.com/comments');
        const unix1 = unixTime;
        console.log(unix1)
        return data ;
    } catch (error) {
        throw error
    }
     
}

// save data in indexedDb 
export default function Firsapi() {
    const [unix1 , setUnix1]= useState("0.0.0");
    const [unix2 , setUnix2]= useState("0.0.0");
    const [unix3 , setUnix3]= useState("0.0.0");
    const [unix4 , setUnix4]= useState("0.0.0");
    const setDatatoStorage = async()=>{
        setUnix1(unixTime)
        try {
            setUnix2(unixTime)
            const d = await addFirstData();
            // localStorage.setItem('data', JSON.stringify(d));
            localForage.setItem('data',d);
            setUnix3(unixTime)
        } catch (error) {
            console.log(error);
        } setUnix4(unixTime)
    } 

    return (
        <div>
            <Col className="first_row_second_column">
    <Row>Start Time : {unix1}</Row>
    <Row>End Time : {unix2}</Row>
    <Row>Start Save :{unix3}</Row>
    <Row>End Save : {unix4}</Row> 
    </Col>
    <br>
    </br>
            
         <Button className='btn btn-success '  onClick={()=>setDatatoStorage()} >First Api Call</Button>
        
        </div>
    )
}
