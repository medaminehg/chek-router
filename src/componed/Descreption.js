import React ,{useEffect} from 'react'
import ReactPlayer from 'react-player/youtube'
import {useParams } from 'react-router-dom'
// import { useEffect } from 'react'
import ScrollToTop from "react-scroll-to-top";
import ScrollTop from "./ScrollTop"
function Descreption({movis}) {

  const params = useParams()
  const user = movis.find(el => el.name === params.name)


  return (

    <div className='moviedescreption'>
     <ScrollToTop/>   
     

      <h2 className='moviename'>{user.name}</h2>
      <div className='d-flex d-flexx'>

      <img src={user.img} className="movieimg"/>

   <p className='moviedescreption'>{user.prod}</p>
      </div>
   <ReactPlayer className="trailer" url={user.ann} controls="true"/>
   

</div>
  )
}

export default Descreption
