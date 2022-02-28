import React, { Component } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class Profil extends Component {
  state={
    time :0
  }
 
  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: this.state.time +1
        
      })
    }, 1000);
  }
  render() {
    return (
        <div>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.obj.img} />
  <Card.Body>
    <Card.Title>{this.props.obj.name}</Card.Title>
    <Card.Text>
    {this.props.obj.email}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{this.state.time}</ListGroupItem>
    <ListGroupItem>{this.props.obj.poste }</ListGroupItem>
    <ListGroupItem>{this.props.obj.phone}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>




       {/* <h1>{this.props.obj.name}</h1>
       <img src={this.props.obj.img} alt={this.props.obj.name}/>
       <h2>{this.state.time}</h2>
      <h3>{this.props.obj.email}</h3>
      <h3>{this.props.obj.phone}</h3>

      <h3>{this.props.obj.poste }</h3>
      <h3></h3> */}

      </div>
    )
  }
}
