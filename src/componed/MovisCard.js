import React from 'react'
import { Button, Card } from 'react-bootstrap';
import MovisRate from './MovisRate';
import './MovisCard.css'
import {Link}from "react-router-dom"
function MovisCard(props) {
  return (
   <Link to={`/users/profile/${props.film.name}`}>
     
    <div className="hero-container">
  <div className="main-container">
    <div className="poster-container">
     <img src={props.film.img} className="poster img" />
    </div>
    <div className="ticket-container">
      <div className="ticket__content">
        <h4 className="ticket__movie-title">{props.film.name}</h4>
        <p className="ticket__movie-slogan">
          {props.film.prod}
        </p>
        <p className="ticket__current-price"><MovisRate Mrate={props.film.rat}/></p>
       <button className="ticket__buy-btn">Description</button>
      </div>
   
  </div>
</div>
</div>
</Link>
  )
}

export default MovisCard
