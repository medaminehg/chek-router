import React, {useState, useEffect} from 'react'
import { Button, FormControl, Form, Nav, Navbar, Container  } from 'react-bootstrap';
import Reate from './Reate';
import {Link}from "react-router-dom"
// import history from '../history';

function Header(props) {
  React.useEffect(() => {props.conect(con)})
  const [data, setdata]=useState("")
  const [con, setcon]=useState("login")
  const Toggle =()=>{
    (con==="login")?setcon("logout"):
    setcon("login")
  }
  return (
    <div className='header'>
      <Navbar className='nav' bg="light" expand="lg">
  <Container fluid>
  <Link to='/' onClick={() => props.addch("")}> <Navbar.Brand className='co' href="#">My cima</Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Link to='/' onClick={() => props.addch("")}><Nav.Link className='co' href="#action1" >Home</Nav.Link></Link>
        <Link to='/serch' onClick={() => props.addch("")}><Nav.Link className='co' href="#action2"> movis</Nav.Link></Link>
        <Button type='login' onClick={Toggle} >{con}</Button>
          
        
         
         
     
      </Nav>
       {/* <div  className="d-flex">
           <button className='b1'></button>
       </div> */}
       <Reate add={props.add}/>
      <Form className="d-flex">
          
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search" onChange={(e) => {props.addch(e.target.value )}}
        />
        <Link to="/serchm"><Button type='submit' >valider</Button></Link> 
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header
