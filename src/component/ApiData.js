import { Container, Row, Col, Button } from 'react-bootstrap';
import Firstapi from './apidata/Firsapi';
import  Secondapi  from './apidata/Secondapi';
import Thirdapi from './apidata/Thirdapi';
import Fourthapi from './apidata/Fourthapi';
import CurrentTime from './apidata/CurrentTime';

import './ApiData.css'



function ApiData() {
 
  return (
    <div  className= 'App'> 
 
<div className="Bkt ">
<h4>FIRST APP</h4>
<Row className= "mt-3 " >
    <Col ><Firstapi/></Col>
    <Col ><Thirdapi/></Col>
  </Row>
  <Row className= "mt-3 ">
    <Col ><Secondapi/></Col>
    <Col ><Fourthapi /></Col>
  </Row>
  <Button >  <CurrentTime/></Button>
  </div>
    </div>
  );
  }

export default ApiData;