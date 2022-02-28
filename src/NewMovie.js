import React from 'react'
import MovisRate from './componed/MovisRate'
import './Newmovie.css'
function NewMovie(props) {
  return (
    
      <div className="top">
  <div className="columns">
    <div className="column is-full featured_wrapper p-0">
      <img src={props.Newm.img} className="featured img" />
      <div className="title_wrapper">
        <span className="has-text-white title">Trending Today</span>
        <h1 className="title is-1 has-text-white">{props.Newm.name}</h1>
        <h3 className="title is-3 has-text-white"><MovisRate Mrate={props.Newm.rat} /></h3>
       <a href={props.Newm.ann} target="_blank"></a> <button className="button is-medium">Trailer</button>
      </div>
    </div>
  </div>
</div>
    
  )
}

export default NewMovie
