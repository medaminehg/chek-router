import React, { useState } from 'react'
import { Button, Modal, Form } from "react-bootstrap"
import './Add.css'

function Addfilm(props) {
  const [filmname, setname] = useState('')
  const [filmimg, setimg] = useState('')
  const [filmrat, setrat] = useState(null)
  const [filmprod, setprod] = useState('')
  const [filmann, setann] = useState('')
  const [show, setshow] = useState(false)
  // state={
  //   name : filmname,
  //   img :filmimg,
  //   rat : filmrat,
  //   prod : filmprod,
  //   ann : filmann
  // }
  return (
    <div className=''>
      <Button className='AddBtn' onClick={() => setshow(!show)}>Add movie</Button>
      <Modal show={show} className='Addmodal'>
        <Modal.Header>Add movie</Modal.Header>
        <Modal.Body >

          <label>movie name</label>

          <Form.Control type="text" onChange={(e) => setname(e.target.value)} />
          <label>movie Url image</label>
          <Form.Control type="text" onChange={(e) => setimg(e.target.value)} />
          <label>movie Reate</label>
          <Form.Control type="text" onChange={(e) => setrat(e.target.value)} />
          <label>movie prod</label>
          <Form.Control type="text" onChange={(e) => setprod(e.target.value)} />
          <label>movie ann</label>
          <Form.Control type="text" onChange={(e) => setann(e.target.value)} />

        </Modal.Body>

        <Modal.Footer>
          <Button onClick={()=>{props.addmovie({ name: filmname, img: filmimg, rat: filmrat, prod: filmprod, ann: filmann }); setshow(!show)}}>Add</Button>
          <Button onClick={() => setshow(!show)}>close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addfilm
